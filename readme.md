# Proyecto Final Backend NodeJS de CoderHouse

## Autenticación de Usuarios

### Dependencias implementadas

- mongoose,jsonwebtoken,multer, bcrypt,nodemailer,socket.io y winston

## API-Rest

### Framework Principal ==> Express

### Variable de entorno a Configurar

## en el archivo .env hay que configurar las distintas variables

- PORT=8080
- NODE_ENV=development
- BASE_HOST=http://localhost:8080
- MONGO_URL= //aca va el servidor de mongo o localhost
- TARGET=mongo
  -EMAIL_DESTINATARIO=// aca va el email del administrador  
  EMAIL= //aca va el email del servidor
  EMAIL_SERVICE=gmail //el servicio elegido es gmail
  EMAIL_PASS= // el pass de gmail
  TOKEN_TIME=24h // y el tiempo que dura el token

### PERSISTENCIAS

Solo se eligio mongoDb para este proyecto

### Rutas

en el repositorio se adjunta la coleccion de Postman
para hacer todas las pruebas

### Uso de Socket.IO

para los mensajes ademas de las rutas , se dejo preparado en el servido la coneccion por socket,

## Ejecutar en producción

```sh
npm start
```

## Ejecutar en desarrollo

```sh
npm run dev
```

### Pasos

- Desde postman registrarse y se envia mail
- luego hacer el login y guardar el token
- crear los productos
- los carritos se crean automaticamente cuando se crea un usuario cada usuario tiene un solo carrito
- se cargan los carritos con el id del carrito y el id del producto y la cantidad
- al crear la orden con el id del carrito se crea la orden y se vacia el carrito y se envia mail
- esta creada la ruta de los mensajes o se puede conectar un Front con socket
