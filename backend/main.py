from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import requests
from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware
app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://26.45.118.179:3000",
      "https://luminous-lolly-87ff54.netlify.app/"  # React
    # Можно добавить другие, например продакшн-домен
]

app.add_middleware(
    CORSMiddleware,  # The middleware class is the first positional argument
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  # You'll likely want to allow specific HTTP methods
    allow_headers=["*"],  # You'll likely want to allow specific headers
)


# Модель входящего запроса
class ChatRequest(BaseModel):
    message: str

# URL твоего n8n webhook (можно вынести в .env для гибкости)
N8N_WEBHOOK_URL = "https://n8n.bogdanna.com/webhook/testMest"

@app.post("/chat")
def chat_with_ai(request: ChatRequest):
    try:
        # Отправляем запрос в n8n webhook
        response = requests.get(N8N_WEBHOOK_URL, json={"message": request.message})
        response.raise_for_status()
        
        # Возвращаем ответ клиенту
        return {
            "success": True,
            "n8n_response": response.json()  # или .text если n8n возвращает текст
        }
    
    except requests.RequestException as e:
        raise HTTPException(status_code=500, detail=f"Request to n8n failed: {str(e)}")
