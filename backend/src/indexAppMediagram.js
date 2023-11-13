import { server } from './app.js';
import { config } from 'dotenv';
import('./database.js');
config();

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log('Server listen to port: ', PORT);
});
