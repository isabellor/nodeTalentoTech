import { db } from "../data/data.js";
import {
  doc,
  getDoc,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

// OBTENER UN PRODUCTO POR ID
export async function obtenerProducto(id) {
  try {
    const docRef = doc(db, "productos", id);
    const snap = await getDoc(docRef);

    if (!snap.exists()) {
      return { error: true, message: "Producto no encontrado" };
    }

    return { id: snap.id, ...snap.data() };
  } catch (error) {
    return { error: true, message: "Error al obtener producto", detail: error };
  }
}

// OBTENER TODOS LOS PRODUCTOS
export async function obtenerProductos() {
  try {
    const ref = collection(db, "productos");
    const snap = await getDocs(ref);

    const productos = snap.docs.map((d) => ({
      id: d.id,
      ...d.data(),
    }));

    return productos;
  } catch (error) {
    return { error: true, message: "Error al obtener productos", detail: error };
  }
}

// AGREGAR UN PRODUCTO
export async function agregarProducto(producto) {
  try {
    const ref = await addDoc(collection(db, "productos"), producto);
    return { id: ref.id, ...producto };
  } catch (error) {
    return { error: true, message: "Error al agregar producto", detail: error };
  }
}

// ACTUALIZAR UN PRODUCTO
export async function actualizarProducto(id, campos) {
  try {
    const ref = doc(db, "productos", id);
    await updateDoc(ref, campos);
    return { success: true };
  } catch (error) {
    return { error: true, message: "Error al actualizar producto", detail: error };
  }
}

// ELIMINAR UN PRODUCTO
export async function eliminarProducto(id) {
  try {
    const ref = doc(db, "productos", id);
    await deleteDoc(ref);
    return { success: true };
  } catch (error) {
    return { error: true, message: "Error al eliminar producto", detail: error };
  }
}
