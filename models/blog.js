const mongoose = require('mongoose');
const blogSchema = mongoose.Schema({
    title: String,
    img: String,
    content: String,
    comments: [{
        name: String,
        comment: String
    }]
})
module.exports = mongoose.model('Blog', blogSchema)