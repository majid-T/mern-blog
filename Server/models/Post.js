const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
    {
        title:{
            type:String,
            required: true,
        },
        body:{
            type:String,
            required: true,
        },
        author:{
            type:String,
            required: true,
        },
    },
    { timestamps:true}
);

const Post = mongoose.Model('Post',postSchema);
module.exports = Post;