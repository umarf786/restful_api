# restful_api
This is my first time working with/creating a  RESTful API. Dependencies used currently are ```dotenv```, ```express```, ```nodemon``` and ```mongoose```.<br>
To try this out, install the dependencies with ```npm install``` whilst in the root project directory. <br>
Create a ```.env``` file and save it in the root. Add the following: ```MONGO_URI``` and ```PORT``` .<br>
Put your MongoDB connection string as the value for ```MONGO_URI``` and the port you want to use as the value for ```PORT```. <br><br>
I have added CRUD functionalities to this project. Here are the routes:

 - Create a user with POST http://localhost:5000/users/add with the fields "name" and "age" in JSON format.

 - Delete a user with DELETE http://localhost:5000/users/remove/:id where :id is the id of the user to delete.
- Show all users with GET http://localhost:5000/users and it will list them as they are from the database.
- Show a single user with GET http://localhost:5000/users/:id where :id is the id of the user to show.
- Update a single user with PUT http://localhost:5000/users/update/:id where :id is the id of the user to update.

<br>
After a request, you will recieve a status such as 201, 200 or 400 with a body of JSON containing "success", "data" or "error".<br>
If the request succeeds, you will recieve a status of either 201 or 200 with a body of JSON containing "success" and "data".
<br>
 If there is an error with your request, you will recieve a status of 400 "success" and "error" .

This is all the functionality I have added so far. If you do not know how to send CRUD requests, use either POSTMAN, INSOMNIA or something similar to test such functionality. These programs allow you to test these type of requests without a frontend in place, which is quite handy.

