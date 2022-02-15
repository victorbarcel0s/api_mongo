const { response } = require('express')
const db = require('../../database')


async function signUp(req, res) {
    let user = {};

    user._id = req.body.cpf
    user.name = req.body.name
    user.username = req.body.username
    user.occupation = req.body.occupation
    user.age = req.body.age
    user.hobbies = req.body.hobbies

    try {
        db.client.connect()
        await db.userCollection.insertOne(
            user
        )
        res.status(200).json("Created succesfully")
    } catch (error) {
        res.status(400).json(error.message)

    }

}
module.exports = signUp