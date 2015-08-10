MassVis Project Website
-------
Install
-------
- port number 3333
- fast-cgi script added
```
pip install virtualenv
pip install virtualenvwrapper
export WORKON_HOME=~/Envs
mkdir -p $WORKON_HOME
source /usr/local/bin/virtualenvwrapper.sh  # or maybe at /usr/bin/
mkvirtualenv massvis

(massvis)$ pip install -r requirements.txt
```
