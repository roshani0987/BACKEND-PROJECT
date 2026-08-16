const express = require('express');
const auth = require('../middleware/auth');
const Blog = require('../models/Blog');
const router = express.Router();

// Create a Blog Post (Protected Route)
router.post('/', auth, async (req, res) => {
    const { title, content } = req.body;
    try {
        const newBlog = new Blog({
            title,
            content,
            author: req.user.id
        });
        const blog = await newBlog.save();
        res.json(blog);
    } catch (err) { res.status(500).send('Server Error'); }
});

module.exports = router;