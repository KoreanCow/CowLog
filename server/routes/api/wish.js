import express from 'express';
// Model
import Wish from '../../models/wish'
import auth from '../../middleware/auth';

const router = express.Router();

// api/post
router.get('/', async (req, res) => {
  const wishFindResult = await Wish.find();
  console.log(wishFindResult, 'All Post Get');
  res.json(!wishFindResult.length ? '위시리스트가 비어있습니다.' : wishFindResult);
})

router.post('/', auth, async (req, res, next) => {
  try {
    console.log(req, 'req');
    const { title, contents, fileUrl, creator } = req.body;
    const newWish = await Wish.create({
      title,
      contents,
      fileUrl,
      creator
    })
    res.json(newWish);
  } catch (e) {
    console.log(e);
  }
})

export default router;