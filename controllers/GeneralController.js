const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{

    res.render("home",{
        title : "Home Page"
    });
});

router.get("/login",(req,res)=>{

    res.render("login",{
        title : "Log In"
    });
});

router.get("/register",(req,res)=>{

    res.render("register",{
        title : "Sign Up"
    });
});

router.get("/propertylisting",(req,res)=>{

    res.render("propertyListing",{
        title : "Property Listing"
    });
});

module.exports = router;