const router = require("express").Router();
const Blog = require("../models/Blog");


router.get('/compose', (req, res) => {
    res.render('composeBlog')
})

router.post('/compose', (req, res) => {
    const { title, content } = req.body;

    // check for the missing field
    if (!title || !content) {
        return res.send("Please fill all the required field!")
    }
    const newBlog = new Blog({
        title,
        content
    })

    newBlog.save().then(() => {
        console.log("saved successfully");
        res.redirect('/');
    }).catch((err) => {
        console.log(err);
    })
})

module.exports = router;