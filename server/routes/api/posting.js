import express from 'express';
import moment from 'moment';
// Model
import Post from '../../models/post'
import User from '../../models/user'

import auth from '../../middleware/auth';

const router = express.Router();

// api/posting
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (user.role === 'admin') {
      // admin인 경우에만 로직을 진행
      console.log(req.user.id);
      res.status(200).send('어드민 권한 확인');
    } else {
      res.status(403).send('어드민이 아님');
    }
  } catch (e) {
    console.log(e);
  }
});
router.post('/', auth, async (req, res, next) => {
  try {
    console.log(req.user.id, 'req.user'); // req.user 확인
    const { title, contents, fileUrl } = req.body;
    const newPost = await Post.create({
      title,
      contents,
      fileUrl,
      date: moment().format('YYYY-MM-DD hh:mm:ss'),
      creator: req.user.id
    });
    const user = await User.findById(req.user.id);
    if (!user.posts.includes(newPost.id)) {
      user.posts.push(newPost.id);
    }
    await user.save();


    res.json(newPost);
  } catch (e) {
    console.log(e);
  }
})

router.delete('/delete', async (req, res) => {
  const postId = req.params.postId;

  try {
    await Post.deleteOne({ _id: postId })

    res.json({ message: '데이터 삭제 성공' })
  } catch (e) {
    res.status(500).json({ message: '데이터 삭제 오류', e })
  }
})

export default router;