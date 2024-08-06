<<<<<<< HEAD
import { server } from './app.js';
import { config } from 'dotenv';
import('./database.js');
config();

const PORT = process.env.PORT || 3500;

server.listen(PORT, () => {
    console.log('Server listen to port: ', PORT);
});
=======
import { server } from './app.js';
import { config } from 'dotenv';
import('./database.js');
config();

const PORT = process.env.PORT || 3500;

server.listen(PORT, () => {
    console.log('Server listen to port: ', PORT);
});
>>>>>>> b3173dc1 (first commit in Ubuntu)
