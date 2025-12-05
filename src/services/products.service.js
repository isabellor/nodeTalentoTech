import {
  obtenerProducto,
  obtenerProductos,
  agregarProducto,
  eliminarProducto
} from "../models/models.products.js";

//obtener todos los productos
export const getAllProductsService = async () => {
  return await obtenerProductos();
};

//obtener producto por id
export const getProductByIdService = async (id) => {
  if (!id) {
    return { error: true, message: "Debe proporcionar un ID", status: 400 };
  }

  const data = await obtenerProducto(id);

  if (data.error && data.message === "Producto no encontrado") {
    return { error: true, message: data.message, status: 404 };
  }

  if (data.error) {
    return { error: true, message: data.message, status: 500 };
  }

  return data;
};

//crear un nuevo producto
export const createProductService = async (productData) => {
  if (!productData || !productData.nombre || !productData.precio || !productData.stock) {
    return { error: true, message: "Datos incompletos", status: 400 };
  }

  const data = await agregarProducto(productData);

  if (data.error) {
    return { error: true, message: data.message, status: 500 };
  }

  return data;
};

//eliminar un producto por id
export const deleteProductService = async (id) => {
  if (!id) {
    return { error: true, message: "Debe proporcionar un ID", status: 400 };
  }

  const data = await eliminarProducto(id);

  if (data.error && data.message === "Producto no encontrado") {
    return { error: true, message: data.message, status: 404 };
  }

  if (data.error) {
    return { error: true, message: data.message, status: 500 };
  }

  return data;
};
