import sharp from "sharp";
import { originalImage_path, thumbnailImage_path } from "../config/baseUrl.js"

export default async () => {
  try {
    await sharp(originalImage_path)
      .resize({ width: 400, height: 400 })
      .rotate(0, { ignoreOrientation: true }) // evita la rotacion automatica de la imagen convertida
      .toFile(thumbnailImage_path)

    console.log("Miniatura generada!");
  } catch (error) {
    console.error('Ocurrio un error al generar la thumbnail en generateThumbnail.js().Error: ', error)
    throw error;
  }
}