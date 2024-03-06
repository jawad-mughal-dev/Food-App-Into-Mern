const express = require("express");
const routers = express.Router();
const jwt = require("jsonwebtoken")
const User = require("../models/User");
const secretKey = "jawadilyasmughal"
const bcrypt = require("bcryptjs")
routers.post("/loginUser", async (req, res) => {

    let email = req.body.email;

    try {
        let userData = await User.findOne({ email });
        if (!userData) {
            return res.status(400).json({ success: false, message: " try with correct creditionals" });
        }
        const salt = await bcrypt.genSalt(10)
        const securePassword = await bcrypt.hash(req.body.password, salt);
        const pwdCompare = await bcrypt.compare(req.body.password, userData.password);
        console.log(pwdCompare);
        if (req.body.email !== userData.email) {
            return res.status(400).json({ success: false, message: " try with correct creditionals email " });
        }
        if (!pwdCompare) {
            return res.status(400).json({ success: false, message: " try with correct creditionals  password" });
        }
        else {
            console.log(userData)
            const payload = {
                user: {
                    id: userData._id
                }
            }
            // for jwt web token we need to things first is user some information and second is the your encryption secreate key
            const token = jwt.sign(payload, secretKey)
            // console.log(token)
            // return res.status(200).json({ success: true, message: " you are logined" });
            return res.status(200).json({ success: true, message: " you are logined" , token : token });
        }

    } catch (error) {
        res.status(500).json({ success: false, message: "errors: " + error })
    }


})

module.exports = routers;