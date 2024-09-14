
from rest_framework import serializers
from ..models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['product_id', 'price', 'name', 'description', 'max_quantity', 'seller', 'active', 'image']
        read_only_fields = ['product_id']  # product_id is auto-generated, so make it read-only
