import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

// routes
import authRoutes from './routes/auth.routes.js';
import postRoutes from './routes/post.routes.js';
import indexRoutes from './routes/index.routes.js';
import userRoutes from './routes/user.routes.js';

const app = express();

//middlewares;
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRoutes);
app.use('/api/auth/', authRoutes);
app.use('/api/post/', postRoutes);
app.use('/api/user/', userRoutes);

export default app;