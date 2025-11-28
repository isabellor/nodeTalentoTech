import express from 'express';
import cors from 'cors';
import productsRouter from './src/routes/products.routes.js';
import authRouter from './src/routes/auth.routes.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// RUTAS SIN TOKEN
app.use('/api/auth', authRouter);

// RUTAS CON TOKEN 
app.use('/api/products', productsRouter);

app.get('/', (req, res) => {
  res.send('Servidor OK');
});

// Middleware de errores general
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
