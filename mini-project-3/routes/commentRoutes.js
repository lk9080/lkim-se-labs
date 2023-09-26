let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get('/', (req, res) => {
    Controllers.commentController.getComments(res);
})

router.post('/', (req, res) => {
    Controllers.commentController.createComment(req.body, res)
})

router.delete('/:commentId', (req, res) => {
    const commentId = req.params.commentId; 
    Controllers.commentController.deleteComment(commentId, res); 
});

module.exports = router;