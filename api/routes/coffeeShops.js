const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const CoffeeShop = require('../models/CoffeeShop')
const Comment = require('../models/Comment')
const verifyToken = require('../token')

//CREATE
router.post("/create", verifyToken, async (req, res) => {
    try {
        const newPost = new CoffeeShop(req.body)
        // console.log(req.body)
        const savedPost = await newPost.save()

        res.status(200).json(savedPost)
    }
    catch (err) {

        res.status(500).json(err)
    }

})

//UPDATE
router.put("/:id", verifyToken, async (req, res) => {
    try {

        const updatedPost = await CoffeeShop.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedPost)

    }
    catch (err) {
        res.status(500).json(err)
    }
})


//DELETE
router.delete("/:id", verifyToken, async (req, res) => {
    try {
        await CoffeeShop.findByIdAndDelete(req.params.id)
        await Comment.deleteMany({ coffeeShopId: req.params.id })
        res.status(200).json("Post has been deleted!")

    }
    catch (err) {
        res.status(500).json(err)
    }
})


//GET POST DETAILS
router.get("/:id", async (req, res) => {
    try {
        const post = await CoffeeShop.findById(req.params.id)
        res.status(200).json(post)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

//GET POSTS
router.get("/", async (req, res) => {
    const query = req.query

    try {
        const searchFilter = {
            title: { $regex: query.search, $options: "i" }
        }
        const posts = await CoffeeShop.find(query.search ? searchFilter : null)
        res.status(200).json(posts)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

//GET USER POSTS
router.get("/user/:userId", async (req, res) => {
    try {
        const posts = await CoffeeShop.find({ userId: req.params.userId })
        res.status(200).json(posts)
    }
    catch (err) {
        res.status(500).json(err)
    }
})



module.exports = router