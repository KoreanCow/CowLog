import express from 'express';
import moment from 'moment';
// Model
import Post from '../../models/post'
import User from '../../models/user'
import Wish from '../../models/wish';

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
router.delete('/delete/:postId', auth, async (req, res) => {
  try {
    const postId = req.params.postId;
    const user = await User.findById(req.user.id);

    const post = await Post.findById(postId);
    const wish = await Wish.findById(postId);
    if (!post && !wish) {
      return res.status(404).json({ error: '게시글 또는 위시리스트를 찾을 수 없습니다.' });
    }
    if (post) {
      if (String(post.creator) !== String(user._id)) {
        return res.status(401).json({ error: '게시글 삭제 권한이 없습니다.' });
      } else {
        await Post.deleteOne({ _id: postId })
        user.posts.pull(postId);
        await user.save();
        return res.json({ message: '게시글이 성공적을 삭제되었습니다.' });
      }
    } else if (wish) {
      if (String(wish.creator) !== String(user._id)) {
        return res.status(401).json({ error: '게시글 삭제 권한이 없습니다.' });
      } else {
        await Wish.deleteOne({ _id: postId });
        user.wishs.pull(postId);
        await user.save();
        return res.json({ message: '위시리스트가 성공적으로 삭제되었습니다.' });
      }
    }
  } catch (e) {
    return res.status(500).json({ error: '데이터 삭제 오류' });
  }
}
);

export default router;