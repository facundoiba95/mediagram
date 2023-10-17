import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

// routes

const app = express();

//middlewares;
app.use(cors({
    origin: [
        'http://localhost:5173',
        'https://mediagram-delta.vercel.app'
    ]
}));
app.use(helmet());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

import authRoutes from './routes/auth.routes.js';
import postRoutes from './routes/post.routes.js';
import indexRoutes from './routes/index.routes.js';
import userRoutes from './routes/user.routes.js';


app.use('/', indexRoutes);
app.use('/api/mediagram/auth/', authRoutes);
app.use('/api/mediagram/post/', postRoutes);
app.use('/api/mediagram/user/', userRoutes);

export default app;