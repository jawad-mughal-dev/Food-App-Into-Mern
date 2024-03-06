const express = require("express")
const router = express.Router()
const { body , query, validationResult } = require('express-validator');


const User = require("../models/User")
router.post("/createuser", 


[

    body("password").notEmpty().withMessage("password field is required "),
    body("email").notEmpty().isEmail().withMessage("email field is required "),
    body("location").notEmpty().withMessage("location  field is required "),
    body("name").notEmpty().withMessage("name field is required "),
]



, async (req, res) => {

  
    const errors = validationResult(req);
 
    if(!errors.isEmpty())
    {
        return res.status(400).json({ successs: false, message : "validation failed" , error : errors.array()})
    }

        try {
            await User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                location: req.body.location

            })

            res.json({ success: true, messages: "New User is Created" })
        } catch (error) {
            console.log("error into Create User model " + error)
            res.status(500).json({ success: false, messages: "New User is not  Created" })

        }
   

})


module.exports = router;

