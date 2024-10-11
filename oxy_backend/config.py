import os
from dotenv import load_dotenv 

load_dotenv()

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'
    ASTRADB_TOKEN = os.environ.get('ASTRADB_TOKEN') or 'you-will-never-guess'
    ASTRADB_URI = os.environ.get('ASTRADB_URI') or 'you-will-never-guess'
    OPENAI_API_KEY = os.environ.get('OPENAI_API_KEY') or 'you-will-never-guess'
    LLAMA_CLOUD_API_KEY = os.environ.get('LLAMA_CLOUD_API_KEY') or 'you-will-never-guess'
