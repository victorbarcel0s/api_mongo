const db = require('../../database')

const crypto = require("crypto");
const {
    CRYPTO_ALG,
    CRYPTO_SECRET, CRYPTO_TYPE
} = process.env
function criptografar(senha) {
    const cipher = crypto.createCipher(CRYPTO_ALG, CRYPTO_SECRET)
    cipher.update(senha);
    return cipher.final(CRYPTO_TYPE)
}
async function signUp(req, res) {
    let user = {};

    user._id = req.body.cpf
    user.name = req.body.name
    user.username = req.body.username
    user.occupation = req.body.occupation
    user.age = req.body.age
    user.hobbies = req.body.hobbies
    user.password = criptografar(req.body.password)


    try {
        
        await db.userCollection.insertOne(
            user
        )
        res.status(200).json("Created succesfully")
    } catch (error) {
        res.status(400).json(error.message)

    }

}
module.exports = signUp