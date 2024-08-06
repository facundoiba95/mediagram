<<<<<<< HEAD
import mongoose from 'mongoose';
import { config } from 'dotenv';
config();

mongoose.connect(process.env.DB_URL_MONGO)
.then(db => console.log('Database is connected.'))
.catch(err => console.error('Failed connection to database. Error: ', err));
=======
import mongoose from 'mongoose';
import { config } from 'dotenv';
config();

mongoose.connect(process.env.DB_URL_MONGO)
.then(db => console.log('Database is connected.'))
.catch(err => console.error('Failed connection to database. Error: ', err));
>>>>>>> b3173dc1 (first commit in Ubuntu)
