const db = require("../../database")

async function post(req, res) {
    const cpf = req.body.cpf
    const content = req.body.content
    let post = {
        'userId': cpf,
        'content': content
    }
    try {
        
        const response = await db.postCollection.insertOne(post)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json(error.message)
    }

}
module.exports = post