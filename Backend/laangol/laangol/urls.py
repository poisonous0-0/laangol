
from django.contrib import admin
from django.urls import path, include
from verify import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include('verify.api.urls')),
    path('api/',include('laangol.api.urls')),
    path('signup/', views.signup),
    path('login/', views.login),
    path('gettoken/', views.gettoken),
    
]
