import cloudinary from 'cloudinary';
import { config } from 'dotenv';
config();

export const maxFileSize_cloudinary = 10485760;

export const cloudinary_config = () => cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_APIKEY,
    api_secret: process.env.CLOUDINARY_APISECRET
})