from flask import Flask
from config import Config
from flask_cors import CORS
from app.services.db import connect_to_db, create_local_db

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    CORS(app)
    
    app.config['db'] = connect_to_db("federal_regulations", 1024)
    
    # Register blueprints
    from app.api import api_bp
    app.register_blueprint(api_bp, url_prefix='/api')

    return app
