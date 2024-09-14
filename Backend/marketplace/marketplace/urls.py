
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from API.views import ProductCreateView,UpdateProductView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/products/', ProductCreateView.as_view(), name='product-create'),
    path('api/products/<int:product_id>/update/', UpdateProductView.as_view(), name='update-product'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)