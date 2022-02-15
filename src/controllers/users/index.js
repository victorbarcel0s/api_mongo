const db = require('../../database')

const allUsers = async (req, res) => {
    try {
        await db.client.connect()
        const response = await db.userCollection.find().toArray();
        for (i in response)
            delete response[i]['password'] // impedindo de retornar o password nessa chamada
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = allUsers