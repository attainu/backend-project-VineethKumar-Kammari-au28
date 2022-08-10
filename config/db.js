require('dotenv').config();
const mongoose = require('mongoose')

// const DB = "mongodb+srv://inshare:ErrorName@cluster0.byh9v.mongodb.net/inshare?retryWrites=true&w=majority"

async function initMongoDB() {
    await mongoose.connect(process.env.MONGO_CONNECTION_URL, (err) => {

        if (err) {
            console.log("Error in connecting to DB")
        } else {
            console.log("successfully connected to DB")
        }
    })
}

module.exports = initMongoDB

