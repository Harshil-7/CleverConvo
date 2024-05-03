import json
from django.http import JsonResponse
from django.views import View
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from .api import get_response
from rest_framework.views import APIView
from .serializers import GenerateImageSerializer

@method_decorator(csrf_exempt, name='dispatch')
class FormSubmissionView(View):
    def post(self, request, *args, **kwargs):
        try:
            data = json.loads(request.body)
            prompt = data.get('prompt')
            active = data.get('active')
            
            text = get_response(prompt,active)
            response = {"bot": text}
            return JsonResponse(response,safe=False)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

@method_decorator(csrf_exempt, name='dispatch')
class GenerateTextView(APIView):
    def post(self, request,*args, **kwargs):
        data = json.loads(request.body)
        prompt = data.get('prompt')
        active = data.get('active')
        serializer = GenerateTextSerializer(data=data)
        if serializer.is_valid():
            text = get_response(prompt,active)
            serializer.save(user=request.user, response=text,prompt=prompt)
            response = {"bot": text}
            return JsonResponse(response,safe=False)       
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@method_decorator(csrf_exempt, name='dispatch')
class GenerateImageView(APIView):
    def post(self, request,*args, **kwargs):
        data = json.loads(request.body)
        prompt = data.get('prompt')
        active = data.get('active')
        serializer = GenerateImageSerializer(data=request.data)
        if serializer.is_valid():
            image_url = get_response(prompt,active)
            serializer.save(user=request.user, image=image_url,prompt=prompt)
            response = {"bot": image_url}  
            return JsonResponse(response,safe=False)       
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@method_decorator(csrf_exempt, name='dispatch')
class GenerateAudioView(APIView):
    def post(self, request,*args, **kwargs):
        data = json.loads(request.body)
        prompt = data.get('prompt')
        active = data.get('active')
        serializer = GenerateAudioSerializer(data=data)
        if serializer.is_valid():
            audio_url = get_response(prompt,active)
            serializer.save(user=request.user, image=audio_url,prompt=prompt)
            response = {"bot": audio_url}  
            return JsonResponse(response,safe=False)       
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@method_decorator(csrf_exempt, name='dispatch')
class GenerateVideoView(APIView):
    def post(self, request,*args, **kwargs):
        data = json.loads(request.body)
        prompt = data.get('prompt')
        active = data.get('active')
        serializer = GenerateVideoSerializer(data=data)
        if serializer.is_valid():
            video_url = get_response(prompt,active)
            serializer.save(user=request.user, image=video_url,prompt=prompt)
            response = {"bot": video_url}  
            return JsonResponse(response,safe=False)       
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)