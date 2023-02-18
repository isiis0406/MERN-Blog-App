const Post = require('../models/Post');

//Get all Post
module.exports.getAllPost = async (req, res) => {
    try {
        const posts = await Post.find().sort({publicationDate: -1});
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//Get One post
module.exports.getOnePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(post == null){
            return res.status(404).json({message: "Cannot find post"})
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//Add On post
module.exports.addOnePost = async (req, res) => {
    try {
        const {title, abstract, author, content,publicationDate} = req.body;
        const newPost = await Post.create({title, abstract, author, content,publicationDate});
        res.status(201).json({post: newPost, message: 'Post created successfully'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// Update One post
module.exports.updateOnepost = async (req, res) => {
    try {
        const {title, abstract, author, content,publicationDate} = req.body;
        const updatedPost = await Post.updateOne({_id: req.params.id}, {
            $set: {title, abstract, author, content,publicationDate}
        });
        if (JSON.parse(updatedPost.modifiedCount) == false) {
            return res.status(404).json({ message: "Post not founded" });
        }
        res.status(200).json({log: updatedPost ,message: "Post updated succesfully"})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//Delete One post 
module.exports.deleteOnePost = async (req, res) =>{
    try {
        const deletedPost = await Post.deleteOne({ _id: req.params.id});
        if (JSON.parse(deletedPost.deletedCount) == false) {
            return res.status(404).json({ message: "Post not founded" });
        }
        const response = 
        
        res.status(200).json({log: deletedPost ,message: "Post deleted succesfully"})
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }    
}

