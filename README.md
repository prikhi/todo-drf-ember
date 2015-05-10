# Todo Tasker

A task tracking web app combining Django REST Framework & Ember.js.

You will need `pip` & `npm` installed.


## REST Server

```bash
cd todo_tasker
pip -r requirements.txt
./manage.py syncdb
./manage.py runserver
```

Browse the API at <http://localhost:8000>


## Ember.js Client

```bash
npm install -g ember-cli
cd client
npm install
bower install
ember serve
```

Browse the site at <http://localhost:4200>
