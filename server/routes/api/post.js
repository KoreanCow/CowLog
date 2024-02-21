import express from 'express';
// Model
import Post from '../../models/post'
import Wish from '../../models/wish';
import User from '../../models/user';
const router = express.Router();

// api/post
router.get('/', async (req, res) => {
  const postFindResult = await Post.find().sort({ date: -1 });
  const wishFindResult = await Wish.find().sort({ date: -1 });
  console.log(postFindResult, wishFindResult, 'All Post Get');
  res.json({ postFindResult, wishFindResult });
})
router.get('/modal', async (req, res) => {
  const postId = req.query.postId;

  try {
    const post = await Post.findById(postId).populate('creator', 'name');
    if (!post) {
      const wish = await Wish.findById(postId).populate('creator', 'name');
      if (!wish) {
        return res.status(404).json({ message: '게시글, 위시리스트를 찾을 수 없습니다' });
      }
      const creatorname = wish.creator.name;
      return res.json({ data: wish, creatorname });
    }

    const creatorname = post.creator.name;
    return res.json({ data: post, creatorname });
  } catch (e) {
    return res.status(500).json({ message: '데이터 조회 오류', e });
  }
});

export default router;