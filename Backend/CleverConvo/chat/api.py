import os
import replicate
import google.generativeai as genai
from dotenv import load_dotenv
from clarifai_grpc.channel.clarifai_channel import ClarifaiChannel
from clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc
from clarifai_grpc.grpc.api.status import status_code_pb2
import cloudinary
import cloudinary.uploader
import requests
import io

load_dotenv()

genai.configure(api_key=os.getenv('GOOGLE_API_KEY'))
PAT = os.getenv('PAT')
USER_ID = os.getenv('USER_ID')
APP_ID = os.getenv('APP_ID')
MODEL_ID = os.getenv('MODEL_ID')
MODEL_VERSION_ID = os.getenv('MODEL_VERSION_ID')



def get_response(prompt,active):
    try:
        if active=="Image Generator":
            channel = ClarifaiChannel.get_grpc_channel()
            stub = service_pb2_grpc.V2Stub(channel)
            metadata = (('authorization', 'Key ' + PAT),)
            userDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)
            post_model_outputs_response = stub.PostModelOutputs(
                service_pb2.PostModelOutputsRequest(
                    user_app_id=userDataObject,  
                    model_id=MODEL_ID,
                    version_id=MODEL_VERSION_ID, 
                    inputs=[
                        resources_pb2.Input(
                            data=resources_pb2.Data(
                                text=resources_pb2.Text(
                                    raw=prompt
                                )
                            )
                        )
                    ]
                ),
                metadata=metadata
            )

            if post_model_outputs_response.status.code != status_code_pb2.SUCCESS:
                print(post_model_outputs_response.status)
                raise Exception("Post model outputs failed, status: " + post_model_outputs_response.status.description)

            output = post_model_outputs_response.outputs[0].data.image.base64
            upload_result = cloudinary.uploader.upload(output,format="png")
            image_url = upload_result["url"]
            return image_url

        elif active=="Music Generator":
            output = replicate.run(
                "riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05",
                input={
                    "alpha": 0.5,
                    "prompt_a": prompt,
                    "denoising": 0.75,
                    "seed_image_id": "vibes",
                    "num_inference_steps": 50
                }
            )
            audio_url = output['audio']
            audio_response = requests.get(audio_url)
            audio_data = audio_response.content                
            upload_result = cloudinary.uploader.upload(io.BytesIO(audio_data), resource_type="raw", format="mp3")
            audio = upload_result["secure_url"]
            return audio
                    
        elif active=="Video Generator":
            try:
                input = {
                        "fps": 24,
                        "width": 576,
                        "height": 576,
                        "prompt": prompt,
                        "guidance_scale": 17.5,
                        "negative_prompt": "very blue, dust, noisy, washed out, ugly, distorted, broken"
                    }

                output = replicate.run(
                            "anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351",
                            input=input
                )
                video_response = requests.get(output[0])
                video_data = video_response.content                
                upload_result = cloudinary.uploader.upload(io.BytesIO(video_data), resource_type="raw", format="mp4")
                video = upload_result["secure_url"]
                return video 
            except Exception as e:
                print(e)
                    
           
        else:
            generation_config = {"temperature":0.9,"top_p":1,"top_k":1,"max_output_tokens":2048}
            model = genai.GenerativeModel("gemini-pro",generation_config=generation_config)


            response = model.generate_content([prompt])
            output_text = response.text
          
            return output_text
    except Exception as e:
        return {"error": str(e)}

