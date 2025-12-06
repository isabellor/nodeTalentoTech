import {
  getAllProductsService,
  getProductByIdService,
  createProductService,
  deleteProductService
} from "../services/products.service.js";

// Obtener todos los productos
export async function getProductos(req, res) {
  try {
    const productos = await getAllProductsService();
    res.status(200).send(JSON.stringify(productos, null, 2)); // JSON bonito
  } catch (error) {
    res.status(error.status || 500).send(JSON.stringify({ error: error.message }, null, 2));
  }
}

// Obtener producto por ID
export async function getProducto(req, res) {
  try {
    const id = req.params.id?.trim();
    if (!id) {
      return res.status(400).send(JSON.stringify({ error: "Debe proporcionar un ID" }, null, 2));
    }
    const producto = await getProductByIdService(id);
    res.status(200).send(JSON.stringify(producto, null, 2));
  } catch (error) {
    res.status(error.status || 404).send(JSON.stringify({ error: error.message }, null, 2));
  }
}

// Crear un nuevo producto
export async function postProducto(req, res) {
  try {
    const nuevoProducto = await createProductService(req.body);
    res.status(201).send(JSON.stringify(nuevoProducto, null, 2));
  } catch (error) {
    res.status(error.status || 500).send(JSON.stringify({ error: error.message }, null, 2));
  }
}

// Eliminar un producto por ID
export async function deleteProducto(req, res) {
  try {
    await deleteProductService(req.params.id);
    res.status(200).send(JSON.stringify({ success: true, message: "Producto eliminado correctamente" }, null, 2));
  } catch (error) {
    res.status(error.status || 404).send(JSON.stringify({ error: error.message }, null, 2));
  }
}
