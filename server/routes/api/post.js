import express from 'express';
// Model
import Post from '../../models/post'
import Wish from '../../models/wish';

const router = express.Router();

// api/post
router.get('/', async (req, res) => {
  const postFindResult = await Post.find().sort({ date: -1 });
  const wishFindResult = await Wish.find().sort({ date: -1 });
  console.log(postFindResult, wishFindResult, 'All Post Get');
  res.json({ postFindResult, wishFindResult });
})

export default router;