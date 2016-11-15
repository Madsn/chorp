del ../**/migrations/0*.py
del db.sqlite3
python manage.py makemigrations chorp_models
python manage.py migrate
python manage.py loaddata sampledata.json
python manage.py loaddata devadmin.json