from rest_framework import serializers
from .models import Image

class GenerateImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ['id', 'user', 'prompt', 'image']


class GenerateTextSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ['id', 'user', 'prompt', 'response']

class GenerateAudioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ['id', 'user', 'prompt', 'audio']

class GenerateVideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ['id', 'user', 'prompt', 'video']