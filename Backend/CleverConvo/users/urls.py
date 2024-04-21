from django.urls import path,include,re_path
from .views import(
    CustomProviderAuthView,
    CustomTokenObtainPairView,
    CustomTokenRefreshView,
    CustomTokenVerifyView,
    LogoutView
)

urlpatterns = [
    re_path(
        r'^o/(?P<provider>[-\w]+)/$',
        CustomProviderAuthView.as_view(),
        name = 'provider-auth',
    ),
    path('',include('djoser.urls')),
    path('jwt/create/',CustomTokenObtainPairView.as_view()),
    path('jwt/refresh/',CustomTokenRefreshView.as_view()),
    path('jwt/verify/',CustomTokenVerifyView.as_view()),
    path('logout/',LogoutView.as_view()),
    
]