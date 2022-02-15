const { MongoClient } = require('mongodb');

const {
    DB_HOST,
    DB_DATABASE,
    DB_COLLECTION_USERS
} = process.env
const client = new MongoClient(DB_HOST);
const userCollection = client.db(DB_DATABASE).collection(DB_COLLECTION_USERS)



module.exports = { client, userCollection }