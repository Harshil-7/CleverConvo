from django.urls import path
from .views import FormSubmissionView , GenerateResponseView

urlpatterns = [
    path('', FormSubmissionView.as_view(), name='Generate Response'),
]