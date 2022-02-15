const { MongoClient } = require('mongodb');

const {
    DB_HOST,
    DB_DATABASE,
    DB_COLLECTION_USERS,
    DB_COLLECTION_POSTS
} = process.env
const client = new MongoClient(DB_HOST);
const userCollection = client.db(DB_DATABASE).collection(DB_COLLECTION_USERS)
const postCollection = client.db(DB_DATABASE).collection(DB_COLLECTION_POSTS)



module.exports = { client, userCollection, postCollection }