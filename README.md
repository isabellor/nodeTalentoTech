# Node Talento Tech API

![API](https://img.shields.io/badge/API-Node.js-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/status-active-brightgreen?style=for-the-badge)
![Firestore](https://img.shields.io/badge/Database-Firestore-orange?style=for-the-badge)
![JWT](https://img.shields.io/badge/Auth-JWT-red?style=for-the-badge)

API de gestión de productos con Node.js, Express y Firestore.  
Incluye autenticación JWT y CRUD completo de productos.  

---

## Frontend de prueba

Se puede probar la API con este frontend interactivo:

[Node Endpoint Tester](https://node-endpoint-tester.netlify.app/)  

**Usuario de prueba:** `test@gmail.com`  
**Contraseña:** `123456`  

---

## Endpoints Disponibles

| Método | Endpoint              | Descripción                  |
|--------|----------------------|-----------------------------|
| POST   | `/auth/login`         | Login y obtener token JWT    |
| GET    | `/products`           | Obtener todos los productos  |
| GET    | `/products/:id`       | Obtener producto por ID      |
| POST   | `/products/create`    | Crear nuevo producto         |
| DELETE | `/products/:id`       | Eliminar producto por ID     |

Todos los endpoints requieren autenticación JWT, excepto `/auth/login`.

---

## Estructura de Carpetas

```plaintext
node-talento-tech/
├─ src/
│  ├─ controllers/     # Controladores de rutas
│  ├─ services/        # Lógica de negocio y manejo de errores
│  ├─ models/          # Acceso a Firestore
│  ├─ routes/          # Definición de endpoints
│  ├─ middleware/      # Middlewares, ej: autenticación JWT
│  ├─ data/            # Configuración y conexión a Firestore
│  └─ app.js           # Inicialización de Express y rutas
├─ package.json
├─ .env                # Variables de entorno (JWT_SECRET, URL DB)
└─ README.md

```

## Despliegue

Esta API está desplegada en Vercel y disponible en:

https://node-talento-tech-eta.vercel.app/api

- La base de datos Firestore está configurada en modo producción.  
- JWT obligatorio para endpoints de productos.  
- Todas las rutas están protegidas excepto `/auth/login`.  
- Formato JSON legible y consistente en todas las respuestas (`JSON.stringify(data, null, 2)`).

---

## Instalación Local

```bash
git clone https://github.com/isabellor/nodeTalentoTech.git
cd node-talento-tech
npm install
npm run dev
```

La API queda disponible en [http://localhost:3000/api](http://localhost:3000/api).  
Se puede usar Postman o el frontend interactivo para probar los endpoints.

## Características Destacadas

- Manejo centralizado de errores en servicios y controladores.
- IDs generados automáticamente en Firestore para evitar conflictos.
- Buenas prácticas de seguridad y autenticación con JWT.
- Listo para ser extendido con nuevos endpoints o integraciones.


