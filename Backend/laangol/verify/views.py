from django.shortcuts import get_object_or_404
from .models import User as DbUser
from rest_framework.response import Response
from .api.serializers import UserSerializers 
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User as Django_user
from django.contrib.auth.hashers import check_password

from rest_framework.decorators import api_view,authentication_classes, permission_classes
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated 

@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    if not email or not password:
        return Response({"detail": "Email and password are required"}, status=status.HTTP_400_BAD_REQUEST)

    # Fetch the user from the custom user model
    user = get_object_or_404(DbUser, email=email)
    
    # Verify the password
    if not check_password(password, user.password):
        return Response({"detail": "Invalid password"}, status=status.HTTP_400_BAD_REQUEST)
    
    # Fetch the Django user for token creation
    Convert_user = get_object_or_404(Django_user, email=email)
    token, created = Token.objects.get_or_create(user=Convert_user)

    # Serialize the user data
    serializer = UserSerializers(instance=user)
    
    return Response({"token": token.key, "user": serializer.data}, status=status.HTTP_200_OK)



@api_view(['POST'])
def signup(request):
    serializer = UserSerializers(data=request.data)
    
    if serializer.is_valid():
        try:
            user = serializer.save()
            user_instance=Django_user.objects.create_user(username=user.name,
                                                          email=user.email,
                                                          password=user.password)
            token, created = Token.objects.get_or_create(user=user_instance)
            return Response({"token": token.key, "user": serializer.data})
        except Exception as e:
            print(f"An error occurred: {e}")
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




@api_view(['GET'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])  
def gettoken(request):
    return Response("Passed for {}".format(request.user.email))



