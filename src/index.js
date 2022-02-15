require("dotenv").config();

const express = require('express')
const users = require('./controllers/users')
const signUp = require('./controllers/signUp')
const updateUser = require('./controllers/updateUser')


const api = express()
api.use(express.json())
api.get('/users', users)
api.post('/signUp', signUp)
api.post('/updateUser', updateUser)

port = 1500
api.listen(port, () => console.log(`Server ONLINE  :${port}`))