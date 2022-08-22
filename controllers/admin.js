const Blog = require('../models/blog');
exports.getMainPage = (req, res) => {
    Blog.find()
        .then(blogs => {
            res.render('admin/index', {
                blogs: blogs
            })
        })
        .catch(err => {
            console.log(err)
        })
}