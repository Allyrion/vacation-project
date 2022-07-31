const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{

    res.render("home",{
        title : "Vay-staytion"
    });
});

router.get("/login",(req,res)=>{

    res.render("login",{
        title : "Log In"
    });
});



router.get("/propertylisting",(req,res)=>{

    res.render("propertyListing",{
        title : "Property Listing"
    });
});

module.exports = router;