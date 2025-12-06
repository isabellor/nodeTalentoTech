import {
  obtenerProducto,
  obtenerProductos,
  agregarProducto,
  eliminarProducto
} from "../models/models.products.js";

// Obtener todos los productos
export const getAllProductsService = async () => {
  return await obtenerProductos();
};

// Obtener producto por ID
export const getProductByIdService = async (id) => {
  

  const producto = await obtenerProducto(id);

  if (producto.error && producto.message === "Producto no encontrado") {
    throw { message: producto.message, status: 404 };
  }

  if (producto.error) {
    throw { message: producto.message || "Error al obtener producto", status: 500 };
  }

  return producto;
};

// Crear un nuevo producto
export const createProductService = async (productData) => {
  if (!productData || !productData.nombre || !productData.precio || !productData.stock) {
    throw { message: "Datos incompletos", status: 400 };
  }

  const nuevoProducto = await agregarProducto(productData);

  if (nuevoProducto.error) {
    throw { message: nuevoProducto.message || "Error al crear producto", status: 500 };
  }

  return nuevoProducto;
};

// Eliminar un producto por ID
export const deleteProductService = async (id) => {
  if (!id) throw { message: "Debe proporcionar un ID", status: 400 };

  const resultado = await eliminarProducto(id);

  if (resultado.error && resultado.message === "Producto no encontrado") {
    throw { message: resultado.message, status: 404 };
  }

  if (resultado.error) {
    throw { message: resultado.message || "Error al eliminar producto", status: 500 };
  }

  return resultado;
};
