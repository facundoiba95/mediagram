import io  from 'socket.io-client';

const socket = io('https://vps-3662924-x.dattaweb.com/api/mediagram', {
    auth:{
        token:localStorage.getItem('token'),
    }
});

export default socket;
