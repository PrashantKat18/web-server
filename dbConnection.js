// // const { MongoClient } = require('mongodb');
// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://localhost:27017';
// const database = 'user'
// const connection = new MongoClient(url)
// async function getConnection() {
//     let result = await connection.connect()
//     let db = result.db(database);
//     let collection = db.collection('user')
//     let reponse = await collection.find({}).toArray();
//     console.log("reponse", reponse);

// }

// getConnection();

const { MongoClient } = require("mongodb");
// const config  = require('./config')
const url = 'mongodb://localhost:27017';

async function mongo(){
    const client = new MongoClient(url, { useUnifiedTopology: true })
    const mongo= await client.connect();
    console.log("DB is connected ✅")
    return mongo
}



module.exports = mongo()