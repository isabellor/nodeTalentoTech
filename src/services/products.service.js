import {
  obtenerProducto,
  obtenerProductos,
  agregarProducto,
  actualizarProducto,
  eliminarProducto
} from "../models/models.products.js";

// Obtener todos
export const getAllProductsService = async () => {
  return await obtenerProductos();
};

// Obtener uno
export const getProductByIdService = async (id) => {
  return await obtenerProducto(id);
};

// Crear
export const createProductService = async (productData) => {
  return await agregarProducto(productData);
};

// Actualizar
export const updateProductService = async (id, campos) => {
  return await actualizarProducto(id, campos);
};

// Eliminar
export const deleteProductService = async (id) => {
  return await eliminarProducto(id);
};
