const express = require("express");
const routers = express.Router();
const jwt = require("jsonwebtoken")
const User = require("../models/User");
const secretKey = "jawadilyasmughal"
routers.post("/loginUser", async (req, res) => {

    let email = req.body.email;

    try {
        let userData = await User.findOne({ email });
        if (!userData) {
            return res.status(400).json({ success: false, message: " try with correct creditionals" });
        }
        if (req.body.password !== userData.password || req.body.email !== userData.email) {
            return res.status(400).json({ success: false, message: " try with correct creditionals email + password" });
        }
        else {
            console.log(userData)
            const payload = { ...userData }
            // for jwt web token we need to things first is user some information and second is the your encryption secreate key
            const token = jwt.sign(payload, secretKey)
            return res.status(200).json({ success: true, message: " you are logined" });
        }

    } catch (error) {
        res.status(500).json({ success: false, message: "errors: " + error })
    }


})

module.exports = routers;