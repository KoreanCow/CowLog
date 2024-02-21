import express from 'express';

import Post from '../../models/post'
import Wish from '../../models/wish';
import MainImg from '../../models/mainImg'

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const recentPosts = await Post.find().sort({ date: -1 }).limit(3);
    const recentWishs = await Wish.find().sort({ date: -1 }).limit(4);
    const mainImgs = await MainImg.find().sort({ date: -1 })
    res.json({ recentPosts, recentWishs, mainImgs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: '서버 오류' });
  }
});

export default router;