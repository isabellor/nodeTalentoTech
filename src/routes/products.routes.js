import express from 'express';
import {
  getProductos,
  getProducto,
  postProducto,
  deleteProducto
} from '../controllers/products.controller.js';

import authentication from '../middleware/authentication.js';

const router = express.Router();


router.use(authentication);


router.get('/', getProductos);


router.get('/:id', getProducto);


router.post('/create', postProducto);


router.delete('/:id', deleteProducto);

export default router;
