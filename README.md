# Onzemais

#### Backend dev deploy

- Install Python

  - [Install link](https://www.python.org/downloads/)

- Install Django

  - [Install link](https://www.djangoproject.com/download/)

- Install Django Rest Framework (DRF)

  - pip install djangorestframework

- Config database

  - Run MySql server
  - Config credencials (back/main/main/settings)

- Run migrations

  - `python manage.py migrate`

- Create admin user

  - python manage.py createsuperuser --email admin@example.com --username admin

- Install jwt

  - pip install djangorestframework_simplejwt

- Run mysql

  - `docker run --name onzemais -e MYSQL_ROOT_PASSWORD=my-secret-pw -p 3306:3306 -d mysql:latest`

- Install mysql client
  - `pip install mysqlclient`
