del db.sqlite3
python manage.py makemigrations
python manage.py migrate
python manage.py loaddata sampledata.json
python manage.py loaddata devadmin.json