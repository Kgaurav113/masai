const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    body : {type: String, required: false},
    likes : {type: Number, required: true, default: 0},
    profileImages : {type: String, required: false},
    user_id : {type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
},
{
   versionKey: false,
   timestamps: true,
});
const Post = mongoose.model("post", postSchema);

module.exports = Post;