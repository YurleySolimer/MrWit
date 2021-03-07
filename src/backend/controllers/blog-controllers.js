const blogCtrl = {};

const Blog = require('../models/Blog');

blogCtrl.postNewPost = async (req, res) => {
  
    //NewPost
    const { category, tittle, post} = req.body;

    const newPost = new Blog ({
        category,
        tittle,
        post
    });
    const postSaved = await newPost.save();
}


blogCtrl.getPost = (req, res) => res.send('This is a post');
blogCtrl.getPosts = (req, res) => res.send('Posts');

blogCtrl.editPost = (req, res) => res.send('Post updated');
blogCtrl.deletePost = (req, res) => res.send('Post deleted');


module.exports = blogCtrl;