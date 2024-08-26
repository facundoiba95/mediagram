import io from 'socket.io-client';

const socket = io(`${import.meta.env.VITE_URL_SOCKET}`,{
    path: `${import.meta.env.VITE_SOCKET_PATH}`,
    autoConnect: false
});

function connectSocket () {
  socket.auth = {
    token: localStorage.getItem('token')
}
  socket.connect()
}

function disconnectSocket() {
  socket.disconnect()
}

export default {socket, connectSocket, disconnectSocket}