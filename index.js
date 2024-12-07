const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const mongoDB = process.env.DB_URI;

if (!mongoDB) {
  console.error("MongoDB URI is undefined. Please check your .env file.");
  process.exit(1);
}

const app = express();
const port = 3000;
const todoRoutes = require("./todoRoutes.js");

mongoose
  .connect(mongoDB)
  .then(() => {
    console.log("Successfully connected to DB!");
  })
  .catch((err) => {
    console.error("Error connecting to DB:", err);
  });

app.use(express.json()); // middleware to accept json request bodies
app.use(cors()); // allows requests from cross-origin (not same origin)
app.use("/todo", todoRoutes);

/* 
Requirements:
- I want to create a todo application
- The application should allow the user to create, read, update and delete todo items -- DONE
- The application should allow the user to login and reject a user with a wrong email/password combination
- I want to keep track of the age of any todo created and want to also know when it was last updated --- DONE 
- I should be able to retrieve a list of todos, but also be able to retrieve a single todo -- DONE 
- Each todo created should belong to a category: household, work, shopping, family, others -- DONE 
- Each todo should have multiple statuses based on their completion -- ???
- I should be able to update the title and the category of any todo -- DONE 
- I should be able to update the completion status of my todos -- DONE 
- I can add any other user to my todo, so they can also view it on their account and update the status of the todos for everyone else tagged to the todo
*/

/* 
1. Create an ERD
- Create a Backend Application
- Create a Frontend Application

*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
