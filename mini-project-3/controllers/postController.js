"use strict";
let Models = require("../models"); //matches index.js

const getPosts = (res) => {
    //finds all posts
    Models.Post.find({})
        .then(posts => res.send(posts))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const createPost = (postPayload, res) => {
    new Models.Post(postPayload).save()
        .then(post => res.send(post))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const updatePost = (postId, updatedData, res) => {
    Models.Post.findByIdAndUpdate(postId, updatedData, { new: true })
        .then(updatedPost => {
            if (!updatedPost) {
                // If no post was found with the given ID
                return res.status(404).send({ result: 404, error: "Post not found" });
            }
            res.send(updatedPost);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({ result: 500, error: err.message });
        });
};

const deletePost = (postId, res) => {
    Models.Post.findByIdAndRemove(postId)
        .then(deletedPost => {
            if (!deletedPost) {
                // If no post was found with the given ID
                return res.status(404).send({ result: 404, error: "Post not found" });
            }
            res.send({ result: 200, message: "Post deleted successfully" });
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({ result: 500, error: err.message });
        });
};

module.exports = {
    getPosts, createPost, updatePost, deletePost
}