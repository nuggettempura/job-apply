<!--

This is a manual to connect to a DB

-- I am using PostgreSQL to create the data
-- The database platform I used is PgAdmin. It is a PostgreSQL database platform specifically

Steps:
1. Create a database in the said platform (pgAdmin or any other database platform that can use PostgreSQL)
2. Used the in the file "db.js" or create your own credentials for the database. I named the database as "job-apply" based on the file
3. After creating the database. I made a script in the "database.sql" file to create tables for the database
4. Using the APIs I created in the "index.js" file, query using the API 'createJob' by using http://localhost:5000/createJob at Postman or any other API platform that can use a query and pass in the parameters based on the API given to insert into the database
5. You may create a user using the api or just run the front end with the navigation that links to 'http://localhost:{your_port}/register' and register through that
6. Use the credentials you created when registering and login into the app
7. You are unable to see the landing page if you do not login
8. Since I am using token when logging in. You may try to use incognito to clear cache to test the login and register page to see if it works
 -->
