require("dotenv").config();
const JWT = require('./controllers/authController') //autenticação com o token
const express = require('express')
const users = require('./controllers/users')
const signUp = require('./controllers/signUp')
const signIn = require('./controllers/signIn')
const sendPost = require('./controllers/sendPost')
const posts = require('./controllers/allPosts')
const updateUser = require('./controllers/updateUser')
const deletePost = require('./controllers/deletePost')
const db = require('./database')
db.client.connect()//conectando database

const api = express()
api.use(express.json())
api.get('/users', users)
api.get('/posts', posts)
api.delete('/deletePost', JWT, deletePost)
api.post('/signUp', signUp)
api.post('/signIn', signIn)
api.post('/sendPost', JWT, sendPost)
api.post('/updateUser', JWT, updateUser)

port = 1500
api.listen(port, () => console.log(`Server ONLINE  :${port}`))