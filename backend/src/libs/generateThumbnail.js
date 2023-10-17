import sharp from "sharp";

export default async (req,res) => {
    const thumbnailPath = `${req.file.path}`; // Ruta para la miniatura
        return new Promise((resolve, reject) => {
          sharp(req.file.path)
            .resize({ width: 400, height: 400 })
            .rotate(0,{ ignoreOrientation: true }) // evita la rotacion automatica de la imagen convertida
            .toFile(`${thumbnailPath}-thumbnail.jpeg`, (err, info) => {
              if (err) {
                console.error('Ocurrio un error al generar la thumbnail en generateThumbnail.js().Error: ',err)
                reject(err);
              } else {
                resolve(info);
              }
            });
        });
}