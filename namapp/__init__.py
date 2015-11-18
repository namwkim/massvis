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
        f.write("\n")

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

@app.route('/data/<path:filename>', methods=['GET'])
def download(filename):
    write_debug("DOWNLOADING...")
    password  = request.args.get('password')
    passwords = read_passwords()
    if password not in passwords:
        write_debug("PASSWORD FAILED")
        return Response("PASSWORD FAILED");

    #get pw-generated time
    splited     = password.split("_")
    write_debug(base64.b64decode(splited[0]))
    decoded  = base64.b64decode(splited[0])

    write_debug("Decoded:" + decoded)
    prevtime = datetime.datetime.strptime(decoded, "%Y-%m-%d-%H:%M:%S")

    #get current time
    currtime = datetime.datetime.today();

    #diff
    timedelta = (currtime-prevtime)#/64/64
    write_debug(str(timedelta.days))
    if timedelta.days>1:
        passwords = read_passwords()
        if password in passwords:
            passwords.remove(password)
            write_passwords(passwords)
        write_debug(password+" expired")
        return Response(password+" expired");

    #file access verfication
    files = splited[1].split("-")
    name = filename.split('.')[0]
    # names = list(map(lambda x: x.split('.')[1], files))
    if name not in files:
        return Response("You don't have access to this file.");
    loadpath = os.path.join(os.getcwd() , app.config['DATA_FOLDER'])
    return send_from_directory(directory=loadpath, filename=filename)
