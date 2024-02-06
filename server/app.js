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

import rootRoutes from './routes/api/index'
import postRoutes from './routes/api/post'
import userRoutes from './routes/api/user'
import authRoutes from './routes/api/auth'
import wishRoutes from './routes/api/wish'

app.use(hpp());
app.use(helmet());
app.use(cookieParser());
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());


mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connecting Success'))
  .catch((e) => console.log(e));

// Use routes
// app.get('/');
app.use('/', rootRoutes);
app.use('/api/post', postRoutes)
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/wish', wishRoutes);
export default app;