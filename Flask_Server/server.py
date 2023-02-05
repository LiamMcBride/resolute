import hashlib
import json

from flask import Flask, redirect, render_template, request, session
from JSONSerializable import JSONSerializable, User


def write_users(user_db):
    json_obj = []
    for usr in user_db:
        json_obj.append(usr.to_dict())

    with open('users.json', 'w', encoding='utf-8') as f:
        json.dump(json_obj, f, ensure_ascii=False, indent=4)
        # f.write(json_obj)
    f.close()

def get_user(user_db, username):
    for user in user_db:
        if user.username == username:
            return user
    return None

def valid_user(user_db, username, pword):
    for user in user_db:
        print("User:\n{}".format(str(user)))
        if user.validate(username, pword):
            return True
    return False

def assemble_users():
    json_obj = None
    users = []
    with open("users.json") as f:
        json_obj = json.loads(f.read())
        f.close()
    for obj in json_obj:
        users.append(User.from_json(User, json.dumps(obj)))
    return users

app = Flask(__name__)
app.secret_key = 'secret_key'  # Set a secret key to use sessions

# A database to store user credentials
user_db = assemble_users()
for user in user_db:
    print(user)



# A helper function to hash passwords using SHA-256
def hash_password(password):
    sha256 = hashlib.sha256()
    sha256.update(password.encode('utf-8'))
    return sha256.hexdigest()

# print(hash_password("1234"))

@app.route('/user', methods=['GET'])
def user():
    if request.method == 'GET':
        return user_db[0].to_json()

# A page to display after successful login
@app.route('/secret', methods=['GET', 'POST'])
def secret():

    if request.method == 'GET':
        if 'username' not in session:  # Check if the user is logged in
            return redirect('/login')

        cUser = get_user(user_db, session.get('username'))
        return '''
            <div>
                <h2>Username: {}</h2>
                <h2>First Name: {}</h2>
                <h2>Last Name: {}</h2>
                <h2>Age: {}</h2>
                <input text="logout" type="submit" value="Submit">
            </div>
                '''.format(cUser.username, cUser.firstName, cUser.lastName, cUser.age)
    else:
        return redirect('/login')

# A page for users to submit their credentials
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        print(username)
        print(password)
        hashed_password = hash_password(password)
        print(hashed_password)
        print(valid_user(user_db, username, str(hashed_password)))
        # if username in user_db and user_db[username] == hashed_password:
        if valid_user(user_db, username, str(hashed_password)):
            session['username'] = username  # Store the username in the session
            return redirect('/secret')
        else:
            return 'Login failed. Invalid username or password.'
    return '''
        <form method="post">
            <input type="text" name="username">
            <input type="password" name="password">
            <input type="submit" value="Submit">
        </form>
    '''

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        firstName = request.form['firstName']
        lastName = request.form['lastName']
        age = request.form['age']
        
        hashed_password = hash_password(password)

        newUser = User("", username, firstName, lastName, age, hashed_password)
        user_db.append(newUser)
        write_users(user_db)

        return redirect('/login')
    return '''
        <form method="post">
            <input type="text" name="username">
            <input type="password" name="password">
            <input type="text" name="firstName">
            <input type="text" name="lastName">
            <input type="text" name="age">
            <input type="submit" value="Submit">
        </form>
    '''


# Start the Flask server
if __name__ == '__main__':
    app.run()
