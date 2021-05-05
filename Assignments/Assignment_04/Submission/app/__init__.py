from flask import Flask
from flask_socketio import SocketIO
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os

socketio = SocketIO()
db = SQLAlchemy()

def create_app(debug=False):
    basedir = os.path.abspath(os.path.dirname(__file__))
    app = Flask(__name__)
    app.debug = debug
    app.config['SECRET_KEY'] = os.urandom(48)

    app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///'+os.path.join(basedir, 'app.db')

    from .main import main as main_blueprint
    app.register_blueprint(main_blueprint)
    cors = CORS(app, resources={r"/*": {"origins": "*"}})
    socketio.init_app(app)

    db.init_app(app)
    db.create_all(app=app)

    return app
