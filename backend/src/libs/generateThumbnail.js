import sharp from "sharp";
import { originalImage_path, thumbnailImage_path } from "../config/baseUrl.js"
/*
        Esta funcion utiliza Sharp, para generar la miniatura, creando un nuevo archivo local que luego
        será subido a Cloudinary.

        Actualmente, estoy generando la miniatura directamente desde la API de Cloudinary (eager) en el modulo uploadImage.js

        Por lo tanto, ESTA FUNCION NO SE UTILIZA EN EL CODIGO!
*/

export default async () => {
  try {
    await sharp(originalImage_path)
      .resize({ width: 400, height: 400 })
      .rotate(0, { ignoreOrientation: true }) // evita la rotacion automatica de la imagen convertida
      .toFile(thumbnailImage_path)

    console.log("Miniatura generada!");
  } catch (error) {
    console.error('Error al generar la miniatura de imagen en generateThumbnail.js().Error: ', error.message)
    return new Error({ error: `Error al generar la miniatura de imagen. \n Detalle: "${error.message}".`, status: 500 });
  }
}