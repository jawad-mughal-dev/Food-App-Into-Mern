const express = require("express")
const router = express.Router()
const User = require("../models/User")
router.post("/createuser", async (req, res) => {

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
        res.json({ success: false, messages: "New User is not  Created" })

    }

})


module.exports = router;