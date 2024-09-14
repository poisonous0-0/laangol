from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Product
from rest_framework.exceptions import PermissionDenied
from rest_framework.parsers import MultiPartParser, FormParser
from API.in_api.serializers import ProductSerializer
from django.shortcuts import get_object_or_404

class ProductCreateView(APIView):
    parser_classes = [MultiPartParser, FormParser]  

    def post(self, request, *args, **kwargs):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class UpdateProductView(APIView):
    permission_classes = [IsAuthenticated]

    def put(self, request, product_id):
        product = get_object_or_404(Product, product_id=product_id)

        if product.seller != request.user:
            raise PermissionDenied("You do not have permission to edit this product.")

        serializer = ProductSerializer(product, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def patch(self, request, product_id):
        return self.put(request, product_id)