const Post= require('../models/Post');

const createPost = async (req,res,next)=>{
    const {title,body,author} = req.body;
    const newPost = new Post({title,body,author});
    try{
        await newPost.save();
        res.send({
            message: 'Success! New post was added!',
            post: newPost,
        });
    }catch(err){
        const error = new Error('Problem creating the post');
        error.error = err;
        next(error);
    }
};

const getAllPosts = async (req,res,next)=>{
    try{
        const posts = await Post.find({});
        res.send({
            message: 'Success! All posts have been queried',
            posts,
        });

    }catch(err){
        const error = new Error('Problem creating the post');
        error.error = err;
        next(error);
    }
};

const getSinglePost = async (req,res,next)=>{
    try{
        const post = await Post.findOne({_id:req.body.id});
        res.send({
            message: 'Success! Post has been queried',
            post,
        });

    }catch(err){
        const error = new Error('Problem creating the post');
        error.error = err;
        next(error);
    }    
};

module.exports = {getAllPosts,getSinglePost,createPost};