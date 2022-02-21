const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    body : {type: String, required: true},
    post_id : {type: mongoose.Schema.Types.ObjectId,
        ref: "post",
        required: true
    }
},
{
   versionKey: false,
   timestamps: true,
});
const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;