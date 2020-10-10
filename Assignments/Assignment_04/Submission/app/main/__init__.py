from flask import Blueprint

main = Blueprint('main', __name__)

msg_history = []
room_history = []
name_history = []
create_history = []

from . import routes
