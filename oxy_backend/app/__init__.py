from flask import Flask
from config import Config
from flask_cors import CORS
from app.services.db import connect_to_db, create_local_db

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    allowed_origins = [
        "http://localhost:3000",
        "https://026c-75-148-43-94.ngrok-free.app",
    ]

    CORS(app, origins=allowed_origins)

    #app.config['db'] = connect_to_db("federal_regulations", 1024)
    app.config['db'] = create_local_db()

    # Register blueprints
    from app.api import api_bp
    app.register_blueprint(api_bp, url_prefix='/api')

    return app
