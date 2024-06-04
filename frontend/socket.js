import io  from 'socket.io-client';
const socket = io(`${import.meta.env.VITE_URL_SOCKET}`, {
    path: `${import.meta.env.VITE_SOCKET_PATH}`,  
    auth: {
        token: localStorage.getItem('token'),
    },
});

export default socket;
