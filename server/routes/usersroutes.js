
const express = require("express");
const { signUp, login,getAllUsersData,getOneUsersData,updateUserData,deleteUserData,getSpecificProfile } = require("../controller/usersapi.js");
const route = express.Router();

//added the routes

route.post("/signup", signUp);
route.get('/profile/:email', getSpecificProfile);
route.post("/login", login);
route.get("/users", getAllUsersData); 
route.get("/users/:id", getOneUsersData); 
route.put("/updateusers/:id", updateUserData);
route.delete("/deleteuser/:id", deleteUserData);



module.exports = route;

