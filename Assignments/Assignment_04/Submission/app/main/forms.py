from flask_wtf import FlaskForm
from wtforms.fields import StringField, SubmitField
from wtforms.validators import Required

class LoginForm(FlaskForm):
    room = StringField('Room', validators=[Required()])
    submit = SubmitField('Enter Chatroom')
