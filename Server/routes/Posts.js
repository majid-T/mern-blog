const express = require('express');
const router = express.Router();

const PostController = require('../controllers/PostsController');

router.get('/',PostController.getAllPosts);
router.get('/get',PostController.getSinglePost);
// router.get('/get',(req,res,next)=>res.send('ok'));
router.post('/create',PostController.createPost);

module.exports = router;