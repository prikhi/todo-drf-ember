# Todo Tasker

A task tracking web app combining Django REST Framework & Ember.js


## REST Server

```bash
pip -r requirements.txt
cd todo_tasker
./manage.py syncdb
./manage.py runserver
```

Browse the API at <http://localhost:8000>


## Ember.js Client

```bash
cd client
npm install
ember serve
```

Browse the site at <http://localhost:4200>
