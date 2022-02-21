var express = require("Express");
var mongoose = require("mongoose");
var {body, validationResult} = require("express-validator");
const req = require("express/lib/request");
var User = require("../models/user.model");
const authenticate = require("../middleware/authorization");
var {upload, uploadSingle} = require("../middleware/imageU");
var router = express.Router();

router.post("", uploadSingle("profileImages"), authenticate,
body("firstName")
.isString()
.isLength({min: 3, max: 30}),
body("firstName")
.isString()
.isLength({min: 3, max: 30}),
body("age").isFloat({gt : 1, lt: 150}),
body("email").isEmail()
.custom(async (value) => {
    const user = await User.findOne({email: value});
    if (user) {
        throw new Error("Email Already registered")
    }
    return true;
}),
async(req, res) =>{
  try {
      const users = await User.create({firstName : req.body.firstName,
        lastName : req.body.firstName,
        age : req.body.firstName,
        email :req.body.firstName,
        profileImages : req.file.path,
    });
      return res.status(201).send(users);
  } catch (err) {
      res.status(500).send({message: err.message});
  }
});

router.get("", async(req, res) =>{
    try {
        const users = await User.find().lean().exec();
        return res.status(201).send(users);
    } catch (err) {
        res.status(500).send({message: err.message});
    }
  });

  router.patch("/:id", async (req, res) => {
    try {
      const users = await User.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec();
  
      return res.send(users);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  router.delete("/:id", async (req, res) => {
    try {
      const users = await User.findByIdAndDelete(req.params.id).lean().exec();
  
      return res.send(users);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  module.exports = router;