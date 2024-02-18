import express from 'express';
import moment from 'moment';
// Model
import Wish from '../../models/wish'
import auth from '../../middleware/auth';
import User from '../../models/user'

const router = express.Router();

// api/post
router.get('/', async (req, res) => {
  const wishFindResult = await Wish.find();
  console.log(wishFindResult, 'All Post Get');
  res.json(!wishFindResult.length ? '위시리스트가 비어있습니다.' : wishFindResult);
})

router.post('/', auth, async (req, res, next) => {
  try {
    // console.log(req, 'req');
    const { title, contents, fileUrl } = req.body;
    const newWish = await Wish.create({
      title,
      contents,
      fileUrl,
      date: moment().format('YYYY-MM-DD hh:mm:ss'),
      creator: req.user.id
    })
    const user = await User.findById(req.user.id);
    if (!user.wishs.includes(newWish.id)) {
      user.wishs.push(newWish.id);
    }
    await user.save();

    res.json(newWish);
  } catch (e) {
    console.log(e);
  }
})

export default router;