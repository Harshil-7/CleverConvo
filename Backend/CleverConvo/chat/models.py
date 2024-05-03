from django.db import models
from django.contrib.auth import get_user_model
from cloudinary.models import CloudinaryField

User = get_user_model()

class Image(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    prompt = models.CharField(max_length=255)
    image = CloudinaryField('image',default=None)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.prompt

class Text(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    prompt = models.TextField()
    response = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.prompt

class Audio(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    prompt = models.TextField()
    audio = CloudinaryField('audio',default=None)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.prompt

class Audio(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    prompt = models.TextField()
    video = CloudinaryField('video',default=None)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.prompt