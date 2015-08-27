import os


from flask import Flask, Response, render_template, request, jsonify, logging, send_from_directory
from functools import wraps
import json, csv
from werkzeug import secure_filename
from time import gmtime, strftime, mktime, time, strptime
import datetime
import random, string
import base64
app = Flask(__name__, static_url_path='')
app.config.from_object('config')
#app.config.from_pyfile('config.py')


datasets = [ "all5k", "single2k", "targets410", "targets393"]

@app.route('/')
def index():
    return render_template("index.html")

# if __name__ == '__main__':
#     app.run(debug=True, host='0.0.0.0', port='6353') # app.debug = True  : this will reload server on code changes

def read_passwords():
    with open('passwords.csv', 'rb') as csvfile:
        rows = csv.reader(csvfile)
        passwords = rows.next()
        print passwords
        return passwords
def write_passwords(passwords):
    with open('passwords.csv', 'wb') as csvfile:
        csv.writer(csvfile).writerow(passwords)
def write_debug(msg):
    with open('debug.txt', 'a') as f:
        f.write(msg)
        
# Route that will process the file upload
@app.route('/datarequest', methods=['POST'])
def datarequest():
    datareq = request.get_json()
    app.logger.info(datareq)
    #1 save request info into a file (requests/)
    timestamp = datetime.datetime.today().strftime("%Y-%m-%d-%H:%M:%S")
    app.logger.info(timestamp)
    filename = timestamp + datareq['email']+".json"
    savepath = os.path.join(app.config['REQUEST_FOLDER'], filename)
    with open(savepath, 'w') as outfile:
        json.dump(datareq, outfile)

    #2 generate a password
    prefix = base64.b64encode(timestamp)#''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(5))
    # request specific
    suffix = "-".join(datareq['requested'])
    password = prefix + "_"+suffix;
    
    passwords = read_passwords()
    
    passwords.append(password)
    write_passwords(passwords)
    write_debug("ISSUE A NEW PASSWORD: " + password)
    return jsonify(password = password)

def check_auth(username, password):
    """This function is called to check if a username /
    password combination is valid.
    """
    app.logger.info(username)
    if username != app.config['USERNAME']:
        write_debug("USERNAME FAILED")
        return False
    if password == app.config['PASSWORD']:
        write_debug("MASTER PASSWORD SUCCESS")
        return True
    passwords = read_passwords()
    if password not in passwords:
        write_debug("PASSWORD FAILED")
        return False
    write_debug("PASSWORD SUCCESS")
    return True

def authenticate():
    """Sends a 401 response that enables basic auth"""
    return Response(
    'Could not verify your access level for that URL.\n'
    'You have to login with proper credentials', 401,
    {'WWW-Authenticate': 'Basic realm="Login Required"'})


def requires_auth(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        auth = request.authorization
        #app.logger.info(auth)
        write_debug("AUTHENTICATION CALLED")
        if not auth or not check_auth(auth.username, auth.password):
            write_debug("AUTHENTICATION FAILED")
            return authenticate()
        return f(*args, **kwargs)
    return decorated

@app.route('/data/<path:filename>', methods=['GET'])
@requires_auth
def download(filename):    
    write_debug("DOWNLOADING...")
    password    = request.authorization['password'];
    splited     = password.split("_")

    #get pw-generated time
    app.logger.info(base64.b64decode(splited[0]))
    decoded  = base64.b64decode(splited[0])

    app.logger.info("decoded:" + decoded)
    prevtime = datetime.datetime.strptime(decoded, "%Y-%m-%d-%H:%M:%S")

    #get current time
    currtime = datetime.datetime.today();

    #diff
    timedelta = (currtime-prevtime)#/64/64
    app.logger.info(timedelta)
    if timedelta.days>1:
        passwords = read_passwords()
        if password in passwords:
            passwords.remove(password)
            write_passwords(passwords)
        app.logger.warning(password+" expired")
        return Response(password+" expired");

    #file access verfication    
    files = splited[1].split("-")
    name = filename.split('.')[0]
    # names = list(map(lambda x: x.split('.')[1], files))
    if name not in files:
        app.logger.info(request.authorization)
        return authenticate()
    loadpath = os.path.join(os.getcwd() , app.config['DATA_FOLDER'])
    return send_from_directory(directory=loadpath, filename=filename)

