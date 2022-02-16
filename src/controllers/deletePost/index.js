const db = require('../../database')
const JWT = require('jsonwebtoken')
const { ObjectId } = require('mongodb')

async function deletePost(req, res) {
    const userId = req.body.userId
    const postId = req.body.postId

    try {
        await db.client.connect()

        const post = await db.postCollection.findOne({ _id: ObjectId(postId) })
        if (post.userId == userId) {
            await db.postCollection.deleteOne({ _id: ObjectId(postId) })
            res.status(200).json("Deleted Successfuly")
        }
        else {
            res.status(404)
        }
    } catch (error) {
        res.status(400).json(error.message)
    }
}
module.exports = deletePost