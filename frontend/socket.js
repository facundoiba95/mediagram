<<<<<<< HEAD
import io from 'socket.io-client';

let socket = null;

const connectionSocket = () => {
    socket = io(`${import.meta.env.VITE_URL_SOCKET}`, {
        path: `${import.meta.env.VITE_SOCKET_PATH}`,  
        auth: {
            token: localStorage.getItem('token')
        }
    });
    
}

=======
import io from 'socket.io-client';

let socket = null;

const connectionSocket = () => {
    socket = io(`${import.meta.env.VITE_URL_SOCKET}`, {
        path: `${import.meta.env.VITE_SOCKET_PATH}`,  
        auth: {
            token: localStorage.getItem('token')
        }
    });
    
}

>>>>>>> b3173dc1 (first commit in Ubuntu)
export { socket, connectionSocket }