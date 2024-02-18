import express from 'express';
import mongoose from 'mongoose';
import config from './config'
import hpp from 'hpp';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

const app = express();
const { MONGO_URI } = config

import rootRoutes from './routes/api/index' // 메인 페이지 라우터
import postRoutes from './routes/api/post' // blog | posts 페이지
import userRoutes from './routes/api/user' // 회원가입 페이지 라우터
import authRoutes from './routes/api/auth' // 로그인 토큰 발급 라우터
import wishRoutes from './routes/api/wish' // 위시리스트 관련 라우터
import postingRoutes from './routes/api/posting' // 게시글 작성 라우터

app.use(hpp());
app.use(helmet());
app.use(cookieParser());
// app.use(cors());
app.use(morgan('dev'));

app.use(express.json());


mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connecting Success'))
  .catch((e) => console.log(e));

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use('/', rootRoutes);
app.use('/api/post', postRoutes)
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/wish', wishRoutes);
app.use('/api/posting', postingRoutes);
export default app;