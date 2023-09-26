"use strict";
let Models = require("../models"); //matches index.js

const getComments = (res) => {
    //finds all posts
    Models.Comment.find({})
        .then(comments => res.send(comments))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const createComment = (commentPayload, res) => {
    // Create a new comment with the provided data
    const newComment = new Models.Comment(commentPayload);

    // Save the comment to the database
    newComment
        .save()
        .then(comment => {
            // Successfully created the comment
            res.send(comment);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({ result: 500, error: err.message });
        });
};

module.exports = {
    getComments, createComment
};
