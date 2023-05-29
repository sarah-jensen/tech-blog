const router = require('express').Router();
const { Blog } = require('../../models');


//routes for CRUD blog functions

//CREATE new blog post
router.post('/newpost', async (req, res) => {
    try {
        const newBlogData = await Blog.create({
            title: req.body.title,
            content: req.body.content,
            author_id: req.body.userData.id,
        });
        res.json(newBlogData);
        
        } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;