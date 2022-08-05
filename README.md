# spring-profesional-tests

.env content:
PORT=3001
ROOT="/"
PG_DB="spring_db"
PG_USERNAME="admin"
PG_PASSWORD="your password goes here"
PG_HOST="localhost"

To be able to use the DB, Docker Will be needed.
Once Docker has been installed, insert the next line into console:
docker run --name spring-profesional -p 5432:5432 -e POSTGRES_PASSWORD=**\*** -e POSTGRES_USER=admin -e POSTGRES_DB=spring_db -d postgres

Note that POSTGRES_PASSWORD will be the same password that you set on .env/PG_PASSWORD
Now, go to your database tool, I'm using pgAdmin, and set a new sever, it will ask you for host (localhost in this case), also for username, password and port.
Username and password will be the one from .env.
For port, I'm using postgres default: 5432. If you want to use a diferent port, you have to build a new docker and specify the port that you want to use (-p 5432:5432)

To insert all data into DB, I opted out by converting json data to csv and insert it straight to DB to make the API as soon as posible. The file is on the root and is called "dataConverted.csv".
