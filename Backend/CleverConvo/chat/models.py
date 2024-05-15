from django.db import models
from django.contrib.auth import get_user_model
from cloudinary.models import CloudinaryField

User = get_user_model()

class Chat(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    prompt = models.TextField()
    response = models.TextField()
    active = models.CharField(max_length=255,default="Ask anything")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.prompt

