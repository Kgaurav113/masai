const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    firstName : {type: String, required: true},
    lastName : {type: String, required: false},
    age : {type: Number, required: true},
    email : {type: String, required: true},
    profileImages : {type: String, required: true},
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "login",
        required: true,
      },
},
{
   versionKey: false,
   timestamps: true,
});
userSchema.pre("save", function (next) {
    if (!this.isModified("password")) return next();
    var hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
    return next();
  });
  
  userSchema.methods.checkPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

const User = mongoose.model("user", userSchema);

module.exports = User;