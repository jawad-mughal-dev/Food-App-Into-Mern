const express = require("express");
const router = express.Router();


router.get("/displayData", (req, res) => {

    try {

        // this is the gloable object get from the db 
        res.send([global.food_items, global.category_data]);
    } catch (error) {
        console.log("errors into display data file ")
        res.status(400).json({ success: false, error: " " + error })
    }
})

module.exports = router