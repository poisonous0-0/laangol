from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Product
from .models import User as DbUser
from rest_framework.exceptions import PermissionDenied
from rest_framework.parsers import MultiPartParser, FormParser
from API.in_api.serializers import ProductSerializer
from django.shortcuts import get_object_or_404
from django.db.models import Count

class ProductCreateView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser]

    def post(self, request, *args, **kwargs):
        # Modify the request data to make the name uppercase
        if 'name' in request.data:
            request.data['name'] = request.data['name'].upper()  # Convert name to uppercase
        
        # Extract the authenticated user from the request
        user = request.user
        
        user_instance = get_object_or_404(DbUser, name=user)
        # Add the seller field to the request data
        request.data['seller'] = user_instance.user_id  # Assuming `user_id` is the primary key for User model

        
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class UpdateProductView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]       # Ensure the user is authenticated

    def put(self, request, product_id, *args, **kwargs):
        try:
            # Get the product and check if it exists
            product = get_object_or_404(Product, product_id=product_id)
            user_instance = get_object_or_404(DbUser, name=request.user)

            # Ensure the product belongs to the user making the request
            if product.seller.user_id!=user_instance.user_id:
                raise PermissionDenied("You do not have permission to update this product.")

            # Serialize and update the product
            serializer = ProductSerializer(product, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        except Product.DoesNotExist:
            return Response({"error": "Product not found."}, status=status.HTTP_404_NOT_FOUND)
        except PermissionDenied as e:
            return Response({"error": str(e)}, status=status.HTTP_403_FORBIDDEN)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        


class TopProductsView(APIView):
    
    def get(self, request, *args, **kwargs):
        try:
            # Fetch top 6 product names and their count
            products = (Product.objects
                        .values('name')
                        .annotate(count=Count('name'))
                        .order_by('-count')[:6])

            # Prepare the response data
            result = [{'name': product['name'], 'count': product['count']} for product in products]

            return Response(result, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        




class RecentProductsView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        try:
            # Get the authenticated user
            user = request.user  
           
            # Fetch the full user object with related region info
            user_instance = get_object_or_404(DbUser, name=user)  # Ensure to match the correct user model
            
            # Access and print the user's region information
            region = user_instance.region_id  # ForeignKey gives you the full Region object
            print(f"Region Name: {region.name}")  # Print region name
            print(f"Region ID: {region.region_id}")  # Print region ID
            
            # Fetch products based on the user's region and most recent products
            products = (Product.objects
                        .filter(seller__region_id=region.region_id)  # Filter by seller's region_id
                        .order_by('-product_id')[:8])  # Fetch the 8 most recent products
            
            # Check if any products were found
            if not products.exists():
                return Response({"message": "No products found for this region."}, status=status.HTTP_200_OK)

            # Prepare the response with product details
            result = [
                {'name': product.name, 'price': product.price, 'seller': product.seller.name}
                for product in products
            ]

            return Response(result, status=status.HTTP_200_OK)

        except AttributeError:
            return Response({"error": "User does not have a region assigned."}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
