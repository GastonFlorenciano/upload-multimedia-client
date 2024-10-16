// Se importan los módulos correspondientes
import express, { json } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { productsRouter } from './routes/products.routes.js'; // Se importa el archivo de rutas

const app = express(); // Crea una instancia de la aplicación Express

// Middlewares
app.use(cors()); // Para permitir que la aplicación acceda a recursos en un servidor ubicado en otro dominio
app.use(morgan('dev')); // Para registrar solicitudes HTTP en la consola en modo 'dev'
app.use(json()); // Para parsear cuerpos de solicitudes en formato JSON

app.use('/', productsRouter); // Middleware para manejar las rutas definidas en el archivo 'products.routes'

// Inicia el servidor y escucha en el puerto especificado
app.listen(3000, () => console.log(`ESCUCHANDO EN EL PUERTO 3000`));