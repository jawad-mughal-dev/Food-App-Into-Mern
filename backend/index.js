

const express = require('express')
const app = express();
const mongodb = require('./db')
const port = 5000;

app.get("/", (req, res) => {
    res.send("hello world !")
})
app.use(express.json());
app.use("/api", require("./Routes/CreateUser"))
app.listen(port, () => {
    console.log(`Express is listen on this port ${port}`)
    // funciton is used for database connection from the mongodb atlas
    mongodb();
})