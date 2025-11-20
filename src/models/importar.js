import { db } from "../data/data.js";
import { addDoc, collection } from "firebase/firestore";



const productos= [
  {
    nombre: "Zapatillas Running",
    precio: 42000,
    stock: 12,
    categoria: "calzado",
    activo: true
  },
  {
    nombre: "Buzo Oversize",
    precio: 35000,
    stock: 8,
    categoria: "indumentaria",
    activo: true
  },
  {
    nombre: "Botella Térmica",
    precio: 18000,
    stock: 20,
    categoria: "accesorios",
    activo: true
  },
  {
    nombre: "Notebook 14 pulgadas",
    precio: 650000,
    stock: 3,
    categoria: "tecnología",
    activo: true
  },
  {
    nombre: "Auriculares Bluetooth",
    precio: 30000,
    stock: 15,
    categoria: "tecnología",
    activo: true
  }
]
async function importar() {
  for (const prod of productos) {
    const ref = await addDoc(collection(db, "productos"), prod);
    console.log("ID:", ref.id);
  }
}

importar();
