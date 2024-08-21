import mongoose from 'mongoose';
import { config } from 'dotenv';
config();


async function connectDatabase() {
    try {
        await mongoose.connect(process.env.DB_URL_MONGO);
        console.log("Database is connected!")
    } catch (error) {
        if (error.code === "ESERVFAIL") {
            console.error('Failed connection to database. Verify network connection.', error)
        }
    }
}

connectDatabase()