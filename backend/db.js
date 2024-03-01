const mongoose = require('mongoose');

async function connectDb() {
    try {
        await mongoose.connect('mongodb+srv://eatsy:eatsy@cluster0.yfwanpf.mongodb.net/eatsymern?retryWrites=true&w=majority&appName=Cluster0');

        // Access the default connection object
        const db = mongoose.connection;

        // Access the collection directly without a schema
        const collection = db.collection('food_items');

        // Fetch data from the collection
        const data = await collection.find().toArray();
        // console.log("Fetched data: " + JSON.stringify(data));

        console.log("Database is connected");

    } catch (error) {
        console.log("Error connecting to the database: " + error);
    }
}

module.exports = connectDb;
