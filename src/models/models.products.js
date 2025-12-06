import { db } from "../data/data.js";
import { doc, getDoc, collection, getDocs, addDoc, deleteDoc } from "firebase/firestore";

// OBTENER UN PRODUCTO POR ID
export async function obtenerProducto(id) {
  const ref = doc(db, "productos", id);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    const error = new Error("Producto no encontrado");
    error.status = 404;
    throw error;
  }

  return { id: snap.id, ...snap.data() };
}

// OBTENER TODOS LOS PRODUCTOS
export async function obtenerProductos() {
  const ref = collection(db, "productos");
  const snap = await getDocs(ref);

  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

// AGREGAR UN PRODUCTO
export async function agregarProducto(producto) {
  const ref = await addDoc(collection(db, "productos"), producto);
  return { id: ref.id, ...producto };
}

// ELIMINAR UN PRODUCTO
export async function eliminarProducto(id) {
  const ref = doc(db, "productos", id);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    const error = new Error("Producto no encontrado");
    error.status = 404;
    throw error;
  }

  await deleteDoc(ref);
  return { success: true };
}
