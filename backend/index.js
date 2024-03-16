

const express = require('express')
const app = express();
const mongodb = require('./db')
const port = 5000;



// this code is used for the cross origin 
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin , X-Requested-With, Content-Type, Accept"
    );
    next();
})






app.get("/", (req, res) => {
    res.send("hello world !")
})
app.use(express.json());
// this routers are used for the create user  
app.use("/api", require("./Routes/CreateUser"))
// this routers are used for the login  user  
app.use("/api", require("./Routes/loginUser"))
app.use("/api", require("./Routes/DisplayData"))

// this code for the server testing or running something like that
app.listen(port, () => {
    console.log(`Express is listen on this port ${port}`)
    // funciton is used for database connection from the mongodb atlas
    mongodb();
})