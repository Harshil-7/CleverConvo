import json
from django.http import JsonResponse
from django.views import View
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from chat.api import get_response
import os

@method_decorator(csrf_exempt, name='dispatch')
class FormSubmissionView(View):
    def post(self, request, *args, **kwargs):
        try:
            data = json.loads(request.body)
            prompt = data.get('prompt')
            active = data.get('active')
            
            response = get_response(prompt,active)
            return JsonResponse(response,safe=False)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)
