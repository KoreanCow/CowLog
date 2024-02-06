import mongoose from "mongoose";
import moment from "moment";

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    index: true
  },
  contents: {
    type: String,
    required: true,
  },
  fileUrl: {
    type: [String],
    default: [],
  },
  date: {
    type: String,
    default: moment().format('YYYY-MM-DD hh:mm:ss')
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
})

const Post = mongoose.model("post", PostSchema);

export default Post;