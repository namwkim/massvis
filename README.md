MassVis Project Website
-------


Install
-------
- Dependencies : node, npm, grunt, bower, python, pip
  * This app builds on flask-python-server, angularjs
- Add following four data files into the 'namapp/data': 
  * "all5k.zip", "single2k.zip", "targets410.zip", "targets393.zip"
- Run following commands.
```
pip install -r requirements.txt
npm install
grunt build
grunt run
```
- If you want to run as a demon, try 'nohup grunt run &'
- Go to: localhost:3333.
- Optional, but recommended way. see: [https://goo.gl/EaCMLJ])
```
pip install virtualenv
pip install virtualenvwrapper
export WORKON_HOME=~/Envs
mkdir -p $WORKON_HOME
source /usr/local/bin/virtualenvwrapper.sh  # or maybe at /usr/bin/
mkvirtualenv massvis

(massvis)$ pip install -r requirements.txt
npm install
grunt build
grunt run  
```
