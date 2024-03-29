import jwt from 'jsonwebtoken'
import config from '../config/index'
const { JWT_SECRET } = config

const auth = (req, res, next) => {
  // const token = req.header('x-auth-token');
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ msg: '토큰 없음, 인증 거부 ' })
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    // console.log(decoded);
    req.user = decoded;
    next();
  } catch (e) {
    console.log(e);
    res.status(400).json({ msg: '토큰이 유효하지 않음.' })
  }
}

export default auth;