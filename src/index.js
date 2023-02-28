import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path from 'path';
import env from './config/config.js';
import logger from './utils/Loggers.js';
import apiRouters from './routers/api/index.js';
import { conect } from './config/bd.js';
import { initSocket } from './socket.js';

const app = express();
conect();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(cors());
app.use('/', express.static(path.join(__dirname, 'public/')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
      logger.info(`${req.method} ${req.url}`);
      next();
});

app.use('/api', apiRouters);

app.use('*', (req, res) => {
      const data = {
            error: `Ruta: ${req.originalUrl} - Metodo: ${req.method} - Ruta inexistente. -Status Code 404`,
      };
      logger.warn(data);

      res.status(404).json(data);
});
const server = app.listen(env.PORT, () => {
      logger.info(
            `Servidor http esta escuchando en el puerto ${
                  server.address().port
            }`
      );
      logger.info(`http://localhost:${server.address().port}`);
      logger.info(`Environment:${env.NODE_ENV}`);
});
initSocket(server);
server.on('error', (error) => {
      logger.error(`Error en servidor ${error}`);
});
