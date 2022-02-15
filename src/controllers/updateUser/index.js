const { response } = require('express')
const db = require('../../database')


async function updateUser(req, res) {
    let objForUpdate = {};

    const cpf = req.body.cpf
    if (req.body.name) objForUpdate.name = req.body.name
    if (req.body.username) objForUpdate.username = req.body.username
    if (req.body.occupation) objForUpdate.occupation = req.body.occupation
    if (req.body.age) objForUpdate.age = req.body.age
    if (req.body.hobbies) objForUpdate.hobbies = req.body.hobbies
    try {
        db.client.connect()

        await db.userCollection.updateOne({
            "_id": cpf
        }, { $set: objForUpdate })

        res.status(200).json("Update succesfully")
    } catch (error) {
        res.status(400).json(error.message)

    }
}
module.exports = updateUser