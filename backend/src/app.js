import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import verifyToken from './middlewares/auth/verifyToken.js';
import handleErrors from './middlewares/errors/handleErrors.js';
import { verifyTokenSocket } from './sockets/Auth/verifyTokenSocket.js';
import http from 'http';
import { Server as SocketServer } from 'socket.io';

// routes
import authRoutes from './routes/auth.routes.js';
import postRoutes from './routes/post.routes.js';
import indexRoutes from './routes/index.routes.js';
import userRoutes from './routes/user.routes.js';
import tagsRoutes from './routes/tags.routes.js';
import commentRoutes from './routes/comment.routes.js';
import professionRoutes from './routes/profession.routes.js';
import notificationSockets, { rooms } from './sockets/Notifications/notificationSockets.js';

// config
const app = express();

export const server = http.createServer(app);

export const io = new SocketServer(server, {
    cors: {
        origin: process.env.URL_HOST,
    },
    path: process.env.SOCKET_PATH,
});


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
app.use(async (req, res, next) => {
    if (exceptionPOSTPaths.find(item => item === req.path)) return next();
    let method = { POST: 'POST', DELETE: 'DELETE' }
    if (!method[req.method]) {
        next();
    } else {
        try {
            await verifyToken(req, res, next);
        } catch (error) {
            next(error);
        }
    }
});


app.use('/', indexRoutes)
app.use('/api/mediagram/auth/', authRoutes);
app.use('/api/mediagram/post/', postRoutes);
app.use('/api/mediagram/user/', userRoutes);
app.use('/api/mediagram/tags/', tagsRoutes);
app.use('/api/mediagram/comment', commentRoutes);
app.use('/api/mediagram/profession', professionRoutes);

// websockets
io.on('connection', (socket) => {
    verifyTokenSocket(socket, () => {
        socket.leaveAll();

        notificationSockets(socket);
        }, (error) => {
        console.error("Ocurrio un error al conectar el WebSocket. Error: ", error);
    })

    socket.on("disconnect", () => {
        if(socket.userAuth) {
            const usernameAuth = socket.userAuth.username;
            rooms.delete(usernameAuth)
            console.log("SOCKET DESCONECTADO. ROOMS ACTUALIZADO: ", rooms);
        }
    })
})



// manejador de errores global
app.use(async (error, req, res, next) => {
    return handleErrors(error, req, res, next)
});

export default app;