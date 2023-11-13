import io  from 'socket.io-client';

const socket = io(import.meta.env.VITE_URL_SOCKET, {
    auth:{
        token:localStorage.getItem('token'),
    }
});

export default socket;
