MassVis Project Website
-------
Install
-------
- To meet mit-server requirement, previous standalone server was replaced with a fast-cgi script:
  - http://flask.pocoo.org/docs/0.10/deploying/fastcgi/
- create a 'passwords.csv' file in the top-hierarchy folder.
- install python-flask dependencies (most likely already being installed)
```
pip install virtualenv
pip install virtualenvwrapper
export WORKON_HOME=~/Envs
mkdir -p $WORKON_HOME
source /usr/local/bin/virtualenvwrapper.sh  # or maybe at /usr/bin/
mkvirtualenv massvis

(massvis)$ pip install -r requirements.txt
```
