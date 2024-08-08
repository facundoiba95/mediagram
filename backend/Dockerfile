# Usa una imagen base oficial de Node.js
FROM node:18.19.1

# Crea un directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia el archivo package.json y package-lock.json (o yarn.lock)
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el resto del código fuente de la aplicación al contenedor
COPY . .

# Expone el puerto en el que la aplicación escuchará
EXPOSE 3200

# Define el comando para ejecutar la aplicación
CMD ["npm", "start"]