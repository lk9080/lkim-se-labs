const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    postTitle: { type: String, trim: true, required: true },
    postDescription: { type: String, trim: true, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Post = mongoose.model("post", postSchema);

module.exports = Post;