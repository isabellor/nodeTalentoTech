import {
  getAllProductsService,
  getProductByIdService,
  createProductService,
  updateProductService,
  deleteProductService
} from "../services/products.service.js";

export async function getProductos(req, res) {
  const data = await getAllProductsService();

  if (data.error) {
    return res.status(500).json(data);
  }

  res.json(data);
}

export async function getProducto(req, res) {
  const data = await getProductByIdService(req.params.id);

  if (data.error) {
    return res.status(404).json(data);
  }

  res.json(data);
}

export async function postProducto(req, res) {
  const data = await createProductService(req.body);

  if (data.error) {
    return res.status(500).json(data);
  }

  res.status(201).json(data);
}

export async function putProducto(req, res) {
  const data = await updateProductService(req.params.id, req.body);

  if (data.error) {
    return res.status(500).json(data);
  }

  res.json({ success: true });
}

export async function deleteProducto(req, res) {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ error: "Debe proveer un ID" });
  }

  const data = await deleteProductService(id);

  if (!data) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  if (data.error) {
    return res.status(500).json(data);
  }

  res.json({ success: true, message: "Producto eliminado correctamente" });
}






