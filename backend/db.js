const mongoose = require('mongoose');

async function connectDb() {
    try {
        await mongoose.connect('mongodb+srv://eatsy:eatsy@cluster0.yfwanpf.mongodb.net/eatsymern?retryWrites=true&w=majority&appName=Cluster0');

        // Access the default connection object
        const db = mongoose.connection;
        // const collections = await db.listCollections();
        // console.log(collections)
        // Access the collection directly without a schema
        const food_items_collection = db.collection('food_items');
        const food_category_collection = db.collection('food_category');

        // Fetch data from the collection
        const data = await food_items_collection.find().toArray();
        const food_category_data = await food_category_collection.find().toArray();
        // console.log("Fetched data: " + JSON.stringify(data));

        console.log("Database is connected");

        global.food_items = data;
        global.category_data = food_category_data;
    } catch (error) {
        console.log("Error connecting to the database: " + error);
    }
}

module.exports = connectDb;
