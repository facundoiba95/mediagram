import app from './app.js';
import { config } from 'dotenv';
import('./database.js');
config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server listen to port: ', PORT);
});
