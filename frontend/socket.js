import io from 'socket.io-client';

const socket_chat = io(`${import.meta.env.VITE_URL_SOCKET}/chat`, {
  autoConnect: false,
  path: `${import.meta.env.VITE_SOCKET_PATH}`,
});

const socket_notifications = io(`${import.meta.env.VITE_URL_SOCKET}/notifications`, {
  autoConnect: false,
  path: `${import.meta.env.VITE_SOCKET_PATH}`,
})

function connectSocket_chat () {
  socket_chat.auth = {
    token: localStorage.getItem('token')
}
  socket_chat.connect()
}

function connectSocket_notifications () {
  socket_notifications.auth = {
    token: localStorage.getItem('token')
}
  socket_notifications.connect()
}

function disconnectSocket_chat (){
  socket_chat.disconnect();
}

function disconnectSocket_notifications () {
  socket_notifications.disconnect();
}

export default {
  socket_chat, 
  socket_notifications,
  disconnectSocket_chat, 
  disconnectSocket_notifications, 
  connectSocket_chat,
  connectSocket_notifications
}