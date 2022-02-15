const db = require('../../database')

const allUsers = async (req, res) => {
    try {
        await db.client.connect()
        const response = await db.userCollection.find().toArray();

        res.status(200).json(response)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = allUsers