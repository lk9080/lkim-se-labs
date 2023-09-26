let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get('/', (req, res) => {
    Controllers.postController.getPosts(res);
})

router.post('/', (req, res) => {
    Controllers.postController.createPost(req.body, res)
})

// Assuming your route path includes the postId as a parameter, e.g., "/posts/:postId"
router.put('/:postId', (req, res) => {
    const postId = req.params.postId; // Extract the postId from the URL
    const updatedData = req.body; // Get the updated data from the request body
    Controllers.postController.updatePost(postId, updatedData, res); // Call the updatePost function with the postId, updatedData, and res
});

module.exports = router;