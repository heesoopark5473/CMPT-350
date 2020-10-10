from flask import session, redirect, url_for, render_template, request, session, jsonify
from flask_socketio import emit, join_room, leave_room
from .. import socketio, db
from . import main, room_history, msg_history, name_history
from .forms import LoginForm
from .models import User
import sys

@main.route('/')
def index():
    return render_template('login.html')

@main.route('/login_post', methods=['POST'])
def login_post():
    username = request.json['username']
    password = request.json['password']
    user = User.query.filter(User.username == username, User.password == password).first()
    if(not user):
        return jsonify(message='failed'), 403
    else:
        session['name'] = username
        return jsonify(message='success', username=username), 200

@main.route('/username', methods=['GET'])
def username():
    return jsonify(name = session.get('name'))

@main.route('/signup')
def signup():
    return render_template('signup.html')

@main.route('/signup_post', methods=['POST'])
def signup_post():
    username = request.json['username']
    password = request.json['password']  
    newUser = User(username=username, password=password)
    db.session.add(newUser)
    db.session.commit()
    return 'OK'

@main.route('/lounge/<id>', methods=['GET', 'POST'])
def lounge(id):
    form = LoginForm()
    if(form.validate_on_submit()):
        session['room'] = form.room.data
        return redirect(url_for('.chat', name=id))
    elif(request.method == 'GET'):
        form.room.data = session.get('room', '')
    return render_template('index.html', form=form, room=room_history, name=id)

@main.route('/chat')
def chat():
    name = request.args['name']
    room = session.get('room', '')
    if(name == '' or room == ''):
        return redirect(url_for('.index'))
    return render_template('chat.html', name=name, room=room)

@socketio.on('joined', namespace='/chat')
def joined(message):
    if(session.get('name') is not None):
        room = session.get('room')
        x = 'Room: ' + str(room) + ' | User: ' + str(session.get('name'))
        room_history.append(x)
        emit('clear', {}, room=room)
        join_room(room)
        emit('status', {'msg': str(session.get('name')) + ' has entered the room.'}, room=room)
        for x in msg_history:
            if(x[0] == str(room)):
                emit('message', {'msg': x[1] + ':' + x[2]}, room=room)

@socketio.on('text', namespace='/chat')
def text(message):
    room=session.get('room')
    previous = [room, message['user'], message['msg']]
    print(previous, file=sys.stdout)

    msg_history.append(previous)
    emit('message', {'msg': message['user'] + ':' + message['msg']}, room=room)

@socketio.on('left', namespace='/chat')
def text(message):
    room=session.get('room')
    leave_room(room)
    #emit('status', {'msg': session.get('name') + ' has left the room.'}, room=room)
    emit('setLeft', {'name': session.get('name')})
    x = 'Room: ' + str(room) + ' | User: ' + str(session.get('name'))
    if x in room_history:
        room_history.remove(x)
    if(len(room_history) == 0):
        msg_history.clear()

@socketio.on('setUser', namespace='/chat')
def setUset(data):
    session['name'] = data.username

@socketio.on('newUser', namespace='/chat')
def newUser(data):
    name_history.append(data['username'])
    print(name_history, file=sys.stdout)
    emit('usernames', name_history)