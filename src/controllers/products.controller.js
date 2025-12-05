import {
  getAllProductsService,
  getProductByIdService,
  createProductService,
  deleteProductService
} from "../services/products.service.js";

//obtener todos los productos
export async function getProductos(req, res) {
  const data = await getAllProductsService();

  if (data.error) {
    return res.status(500).json({ error: data.message });
  }

  res.json(data);
}

//obtener producto por id
export async function getProducto(req, res) {
  const id = req.params.id;

  const data = await getProductByIdService(id);

  if (data.error) {
    return res.status(data.status).json({ error: data.message });
  }

  res.json(data);
}

//crear un nuevo producto
export async function postProducto(req, res) {
  const data = await createProductService(req.body);

  if (data.error) {
    return res.status(data.status).json({ error: data.message });
  }

  res.status(201).json(data);
}

//eliminar un producto por id
export async function deleteProducto(req, res) {
  const id = req.params.id;

  const data = await deleteProductService(id);

  if (data.error) {
    return res.status(data.status).json({ error: data.message });
  }

  res.json({ success: true, message: "Producto eliminado correctamente" });
}
