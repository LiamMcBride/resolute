from flask import Flask, request, redirect, render_template, session
import hashlib

app = Flask(__name__)
app.secret_key = 'secret_key'  # Set a secret key to use sessions

# A database to store user credentials
user_db = {'user1': '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8',
           'user2': '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918',
           'mailmcbride': '2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824'
           }

# A helper function to hash passwords using SHA-256
def hash_password(password):
    sha256 = hashlib.sha256()
    sha256.update(password.encode('utf-8'))
    return sha256.hexdigest()

# A page to display after successful login
@app.route('/secret')
def secret():
    if 'username' not in session:  # Check if the user is logged in
        return redirect('/login')
    return 'You have successfully logged in!'

# A page for users to submit their credentials
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        hashed_password = hash_password(password)
        if username in user_db and user_db[username] == hashed_password:
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


# Start the Flask server
if __name__ == '__main__':
    app.run()
