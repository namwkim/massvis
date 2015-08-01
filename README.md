MassVis Project Website
-------


Install
-------
- Dependencies : node, npm, grunt, bower, python, pip
  * This app builds on flask-python-server, angularjs
- Add the four data files into the 'namapp/data':
- Run following commands.
```
pip install -r requirements.txt
npm install
grunt build
grunt run
```
- if you want to run as a demon, try 'nohup grunt run &'
- Go to: localhost:3333.
- Optional, but recommended way. see: [https://goo.gl/EaCMLJ])
```
pip install virtualenv
pip install virtualenvwrapper
export WORKON_HOME=~/Envs
mkdir -p $WORKON_HOME
source /usr/local/bin/virtualenvwrapper.sh  # or maybe at /usr/bin/
mkvirtualenv hyecoo

(hyecoo)$ pip install -r requirements.txt
npm install
grunt build
grunt run  
```
