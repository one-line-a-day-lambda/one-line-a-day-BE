# one-line-a-day-BE





## What does it do?
Allows users to use our app essentially as a journal, where they enter one post a day to keep track of their day and highlighted moments.

## What was my role?
Backend - 
-implemented server testing
-used migrations and seeding to create basic structure of database. 
-built out endpoints 
-built middleware to utilize json web tokens for user sessions and authorization using a generated token
-used knex and express sessions for user sessions and cookies 
-tested endpoints via data testing and through postman
- pair programmed with Front End to make sure endpoints are connecting with FE and they are receiving the correct data object. 
-Reviewed code and worked out bugs.

## Connecting to Back End
- Open terminal and cd into root folder
- Run npm init -y or yarn init -y to built package.json file
- Run npm i or yarn to install dependencies
- Run npm i axios or yarn install axios
- Connect to endpoints through Axios (see Axios docs)

(Register) - POST `/api/auth/register` (will register user)
(Login) - POST `/api/auth/login` (will return token for auth)
(Retrieve User and their posts) - GET `/api/users/:id`
(Delete Post) DELETE `/api/posts/:id`
(Delete User) DELETE `/api/users/:id`
(Edit a Post) PUT `/api/posts/:id` 
