import os
import openai
import json
import replicate
from dotenv import load_dotenv


load_dotenv()

openai.api_key = os.environ.get('OPENAI_API_KEY')

def get_response(prompt,active):
    try:
        if active=="Image Generator":
            response = openai.images.generate(
            model="dall-e-2",
            prompt= prompt,
            size="512x512",
            quality="standard",
            n=1,
            )

            image_url = response.data[0].url
            return {"bot": image_url}  

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
            return {"bot": audio_url} 
           
        elif active=="Video Generator":
    
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
            return {"bot": output} 
           
        else:
            response = openai.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                {
                    "role": "user",
                    "content": prompt
                }
                ],
        
                temperature=1,
                max_tokens=1000,
                top_p=1,
                frequency_penalty=0,
                presence_penalty=0
            )
            output_text = response.choices[0].message.content
            return {"bot": output_text}  
    except Exception as e:
        return {"error": str(e)}




