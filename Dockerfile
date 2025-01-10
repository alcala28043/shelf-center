# Usa una imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo
WORKDIR /usr/src/app

# Copia los archivos del proyecto
COPY package*.json ./
RUN npm install

# Copia el resto de los archivos
COPY . .

# Exponer el puerto 8080 para Cloud Run
EXPOSE 8080

# Iniciar la aplicación
CMD ["npm", "start"]
