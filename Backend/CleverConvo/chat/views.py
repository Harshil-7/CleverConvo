import json
from django.http import JsonResponse
from django.views import View
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from .api import get_response
from rest_framework.views import APIView
from .serializers import GenerateResponseSerializer

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
class GenerateResponseView(APIView):
    def post(self, request,*args, **kwargs):
        data = json.loads(request.body)
        prompt = data.get('prompt')
        active = data.get('active')
        response = get_response(prompt,active)
        print(response , request.user)
        serializer = GenerateResponseSerializer(data={'prompt': prompt, 'response': response,'active':active, 'user': request.user})
        if serializer.is_valid():
            serializer.save(user=request.user, response=response,prompt=prompt,active=active)
            response = {"bot": response}
            return JsonResponse(response,safe=False)       
        return JsonResponse({"error": str(serializer.errors)},status=500)
