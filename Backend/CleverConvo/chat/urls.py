from django.urls import path
from .views import GenerateImageView

urlpatterns = [
    path('generate-image/', GenerateImageView.as_view(), name='generate image'),
]