from rest_framework import serializers
from .models import Chat

class GenerateResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chat
        fields = ['id', 'user', 'prompt', 'response','active','created_at']

