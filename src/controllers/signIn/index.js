const jwt = require('jsonwebtoken')
const db = require('../../database')


const crypto = require("crypto");
const {
    JWTSECRET,
    CRYPTO_ALG,
    CRYPTO_SECRET,
    CRYPTO_TYPE
} = process.env
function descript(senha) {
    const decipher = crypto.createDecipher(CRYPTO_ALG, CRYPTO_SECRET)
    decipher.update(senha, CRYPTO_TYPE);
    return decipher.final();
}
async function signIn(req, res) {
    const username = req.body.username
    const password = req.body.password

    try {
        
        const response = await db.userCollection.findOne({ 'username': username })
        if (descript(response.password) == password) {
            const token = jwt.sign({ username }, JWTSECRET, {
                expiresIn: 900 // expira em 15min
            });
            return res.json({ auth: true, token: token });
        } else
            res.status(401).json("Unauthorized")

    } catch (error) {
        res.status(400).json(error.message)
    }
}
module.exports = signIn