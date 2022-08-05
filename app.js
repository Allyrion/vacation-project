const express = require("express");
const {engine} = require('express-handlebars');
const generalController = require("./controllers/GeneralController")
const userController = require("./controllers/UserController")

//Create Express App Object
const app = express();

//Set up Express Handlebars as the Template engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


app.use(express.static('public'))

//Tells express to interpret form data
app.use(express.urlencoded({extended:true}));


app.use("/", generalController);
app.use("/users", userController);


const PORT = 3000;
app.listen(PORT, ()=> {
    console.log(`App up and running on ${PORT}`);
})