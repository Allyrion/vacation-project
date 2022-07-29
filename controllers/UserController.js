const express = require('express');
const router = express.Router();


router.get("/registration",(req,res)=>{

    res.render("register",{
        title : "Sign Up"
    });
});

router.post("/register", (req,res)=>{
     
    const user_data = req.body;

    //await userModel.createUsers(user_data);

    res.redirect("/")
})

module.exports = router;