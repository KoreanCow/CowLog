import mongoose from 'mongoose';

const mainImg = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: true,
  }
})

const MainImg = mongoose.model('mainimg', mainImg);

export default MainImg;
