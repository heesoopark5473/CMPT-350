from flask_sqlalchemy import SQLAlchemy
from .. import db

class User(db.Model):
    id          = db.Column(db.Integer, primary_key=True)
    username    = db.Column(db.String, nullable=False, unique=True)
    password    = db.Column(db.String, nullable=False)

    def __init__(self, username, password):
        self.username = username
        self.password = password
