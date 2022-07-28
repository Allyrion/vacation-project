const express = require("express");
const {engine} = require('express-handlebars');
const generalController = require("./controllers/GeneralController")


//Create Express App Object
const app = express();

//Set up Express Handlebars as the Template engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


app.use(express.static('public'))


app.use("/", generalController);


const PORT = 3000;
app.listen(PORT, ()=> {
    console.log(`App up and running on ${PORT}`);
})