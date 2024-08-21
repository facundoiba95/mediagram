# Mediagram
   <p align="left">
     <img src="https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green">
   </p>

**Mediagram** es un proyecto de práctica, el cual esta desarrollado desde cero con la stack MERN.<br/> Consiste en una red social la cual permite:
     <ul>
       <li>Conectar con otros usuarios.</li>
       <li>Cambiar la privacidad de su cuenta.</li>
       <li>Crear publicaciones con texto o multimedia.</li>
       <li>Interaccionar con las publicaciónes y comentarios.</li>
       <li>Recibir/enviar notificaciónes.</li>
       <li>Agregar una ubicación geográfica en las publicaciones.</li>
       <li>Mencionar otros usuarios en publicaciónes.</li>
       <li>Sección Explorar.</li>
     </ul>

<p>Puedes utilizar esta cuenta para probar la web: </p>
    <p><b>Username:</b> user</p>
    <p><b>Password:</b> User_123</p>
<p>Sino, regístrate y accede con tu cuenta.</p>

## Demo: Sección Explorar.
**En esta sección se muestran publicaciónes relacionadas con "tags" que agrega el usuario al momento de crear el post.**

**Ruta:** https://mediagram-backend.onrender.com/api/mediagram/post/visiblePosts?nameTag=futbol

https://github.com/user-attachments/assets/553ccd04-740b-45c0-8fc1-335f14a92221

### post.routes.js - router
![getVisiblePost-route](https://github.com/user-attachments/assets/292508ac-0688-4f06-b8f9-cd9d244ff072)
### visiblePosts.validations.js - middleware
![visiblePost-validations](https://github.com/user-attachments/assets/de1928f1-f705-42cc-9982-8d43fb8cd963)
### nameTagSchema.validations.js - middleware
![nameTagSchema validations](https://github.com/user-attachments/assets/a9e5ebb9-e981-4d79-99df-9a3e3037bce9)
### validationErrors.js - middleware
![validationsErrors](https://github.com/user-attachments/assets/9610b5df-6d67-45b7-94bf-489d3b895d96)
### searchTags.js - middleware
![searchTags](https://github.com/user-attachments/assets/410002ad-924f-4759-8232-6ba4dcf249e0)
### associateTagsByPosts.js - middleware
![Captura desde 2024-08-19 19-52-27](https://github.com/user-attachments/assets/99ddc8f7-7dc0-44ea-ba44-19426fb32e1f)
### visiblePosts controller
![visiblePosts-controller](https://github.com/user-attachments/assets/386706e9-ab61-4b9c-ba06-890c9d8ebaad)

## Entorno de desarollo con "Dockerfile.dev" y "docker-compose-dev.yml".

### Dockerfile.dev
![dockerfile dev](https://github.com/user-attachments/assets/5af26e61-8c7b-4800-bbc3-91770bdd0912)
### docker-compose-dev.yml
![docker-compose-dev yml](https://github.com/user-attachments/assets/c65ee169-eeeb-42eb-8c61-1d0fd742309a)


En el desarrollo de la aplicación, se crearon funcionalidades como:
<ul>
     <li>Construcción de API REST.</li>
     <li>Validación y sanitizacion de datos.</li>
     <li>Autenticación a través de JWT.</li>
     <li>Gestión de estados con Redux Toolkit.</li>
     <li>CRUD.</li>
     <li>Carga de contenido multimedia a CDN.</li>
     <li>Conversión y compresión de multimedia.</li>
     <li>Renderizados condicionales.</li>
     <li>Notificaciónes en tiempo real con Websockets.</li>
</ul>



Inlcuye tecnologias, librerias y herramientas como:
<ul>
     <li>Styled Components</li>
     <li>Google APIS</li>
     <li>Docker</li>
     <li>JSON Web Tokens</li>
     <li>React Redux Toolkit</li>
     <li>Express validator.</li>
     <li>Socket.io</li>
     <li>Framer Motion</li>
     <li>Material UI</li>
     <li>React Router DOM</li>
     <li>Nodemailer</li>
     <li>Ffmpeg</li>
</ul>


Desarrollado por: ***Facundo Ibañez Gambarte***.


