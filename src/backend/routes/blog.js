const { Router } = require('express');
const router = Router();
const { getPosts, getPost, postNewPost, editPost, deletePost } = require('../controllers/blog-controllers');


router.post('/newPost', postNewPost);
router.get('/post', getPosts);
router.get('/post/id', getPost);
router.put('/post:id', editPost),
router.delete('/post:id', deletePost);

module.exports = router;
