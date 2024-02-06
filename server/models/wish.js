import mongoose from "mongoose";
import moment from "moment";

const WishSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    index: true,
  },
  contents: {
    type: String,
    required: true,
  },
  filUrl: {
    type: String,
    default: null,
  },
  date: {
    type: String,
    default: moment().format('YYYY-MM-DD hh:mm:ss')
  },
  completed: {
    type: Boolean,
    default: false,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
})

const Wish = mongoose.model('wish', WishSchema);

export default Wish;