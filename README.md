## Harness

1. The application allows posting and viewing of jobs along with top 5 skills
2. Set up your local environment by following the **Setup** instructions below
4. The backend is built using Django REST Framework (DRF)
5. The frontend is built using React
    

## Setup

### Backend (Django REST Framework)

#### Set up a Python virtual environment
In the terminal, in your project's directory, run this command:

Mac or Linux:
```
python -m venv .venv
```

Windows:
```
py -m venv .venv
````

If this is successful, you should see a new .venv directory appear in your project directory.

#### Activate your Python virtual environment

Mac or Linux:
```
source .venv/bin/activate
```

Windows:
```
source env\Scripts\activate
```

#### Install packages

[Install pip](https://pip.pypa.io/en/stable/installation/#supported-methods):
```
python -m ensurepip --upgrade
```

Run these commands to navigate into the backend directory and install required packages:
```
cd ./harness_api
pip install -r requirements.txt
```
#### Setup database
1. Setup a postgres database
2. Add the database name, hostname, password, port and username to the ENV
3. .env.example is provided to help with environment variables

#### Run migrations

From the `harness_api` directory, run all of the migration scripts:
```
python ./manage.py migrate
```

#### Create a superuser

Replace admin@example.com with your own email address
```
python manage.py createsuperuser --email admin@example.com --username admin
```

#### Run the server

From the `harness_api` directory, run the server:
```
python ./manage.py runserver
```

### Frontend (React app)

#### Install node and npm

1. [Download and install Node.js and npm](https://nodejs.org/en/)

#### Run the web (frontend) app

1. Change into the `harness_web`
    ```
    cd ./harness_api
    ```
2. Install the packages
    ```
    npm i
    ```
3. Run the server
    ```
    npm start
    ```

### Running the application

1. You can now visit http://localhost:3000/ to view/use the application