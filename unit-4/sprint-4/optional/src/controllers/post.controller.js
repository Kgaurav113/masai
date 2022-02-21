var express = require("Express");
var mongoose = require("mongoose");
var Post = require("../models/user.model");

var router = express.Router();

router.post("", async(req, res) =>{
  try {
      const posts = await Post.create(req.body);
      return res.status(201).send(posts);
  } catch (err) {
      res.status(500).send({message: err.message});
  }
});

router.get("", async(req, res) =>{
    try {
        const posts = await User.find().lean().exec();
        return res.status(201).send(posts);
    } catch (err) {
        res.status(500).send({message: err.message});
    }
  });

  module.exports = router;