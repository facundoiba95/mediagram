import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import verifyToken from './middlewares/auth/verifyToken.js';
import handleErrors from './middlewares/errors/handleErrors.js';
import http from 'http';
import { Server as SocketServer } from 'socket.io';
const app = express();
export const server = http.createServer(app);

export const io = new SocketServer(server,{
    cors: {
        origin: `${process.env.URL_HOST}`
    }
})

const exceptionPOSTPaths = [
     '/api/mediagram/auth/login',
     '/api/mediagram/auth/register',
     '/api/mediagram/post/addComment'
]

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

// middleware para verificar token en todas las solicitudes POST, con lista de excepciones.
app.use( async ( req,res,next ) => {
    if(exceptionPOSTPaths.find(item => item === req.path)) return next();
    if(req.method !== 'POST'){
        next();
    } else {
        try {
            await verifyToken( req,res,next );
        } catch (error) {
            next(error);
        }
    }
});


// routes
import authRoutes from './routes/auth.routes.js';
import postRoutes from './routes/post.routes.js';
import indexRoutes from './routes/index.routes.js';
import userRoutes from './routes/user.routes.js';
import { getNotifications } from './sockets/Notifications/notificationSockets.js';

app.use('/', indexRoutes);
app.use('/api/mediagram/auth/', authRoutes);
app.use('/api/mediagram/post/', postRoutes);
app.use('/api/mediagram/user/', userRoutes);

// websockets
io.on('connection', (socket) => {
    getNotifications(socket)
})

// manejador de errores global
app.use(async ( error,req,res,next ) => {
    return handleErrors( error,req,res,next )
});

export default app;