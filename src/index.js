require("dotenv").config();
const JWT = require('./controllers/authController') //autenticação com o token
const express = require('express')
const users = require('./controllers/users')
const signUp = require('./controllers/signUp')
const signIn = require('./controllers/signIn')
const post = require('./controllers/posts')
const updateUser = require('./controllers/updateUser')


const api = express()
api.use(express.json())
api.get('/users', users)
api.post('/signUp', signUp)
api.post('/signIn', signIn)
api.post('/post', JWT, post)
api.post('/updateUser', JWT, updateUser)

port = 1500
api.listen(port, () => console.log(`Server ONLINE  :${port}`))