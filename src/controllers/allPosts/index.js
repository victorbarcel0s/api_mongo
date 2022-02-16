const db = require("../../database")
const JWT = require('jsonwebtoken')

async function getPosts(req, res) {
    try {
        await db.client.connect();
        const response = await db.postCollection.find().toArray()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json(error.message)

    }
}
module.exports = getPosts