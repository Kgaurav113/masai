var express = require("Express");
var mongoose = require("mongoose");
var Comment = require("../models/comment.model");

var router = express.Router();

router.post("", async(req, res) =>{
  try {
      const comments = await Comment.create(req.body);
      return res.status(201).send(comments);
  } catch (err) {
      res.status(500).send({message: err.message});
  }
});

router.get("", async(req, res) =>{
    try {
        const comments = await Comment.find().lean().exec();
        return res.status(201).send(comments);
    } catch (err) {
        res.status(500).send({message: err.message});
    }
  });

  module.exports = router;