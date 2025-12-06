import express from 'express';
import {
  getProductos,
  getProducto,
  postProducto,
  deleteProducto
} from '../controllers/products.controller.js';

import authentication from '../middleware/authentication.js';
import validarId from '../middleware/validarId.js';

const router = express.Router();

router.use(authentication);

router.get('/', getProductos);

router.get('/:id', validarId, getProducto);

router.post('/create', postProducto);

router.delete('/:id', validarId, deleteProducto);

export default router;
