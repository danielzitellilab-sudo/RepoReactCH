# 🦸 Abuela Estela Comics

> E-commerce de cómics usados.

---

## 📚 Sobre el proyecto

**Abuela Estela Comics** es una tienda online orientada a la compra de cómics usados. El catálogo está organizado por tipo de publicación, editoriales e idioma y permite al usuario explorar, agregar productos al carrito y finalizar su compra con un formulario simple.

El proyecto fue desarrollado como parte del curso de React en **CoderHouse**.

---

## 🛠️ Tecnologías

| Tecnología | Uso |
|---|---|
| [React 18](https://react.dev/) | Framework principal |
| [React Router v7](https://reactrouter.com/) | Navegación SPA |
| [React Bootstrap](https://react-bootstrap.github.io/) | Componentes UI |
| [Firebase / Firestore](https://firebase.google.com/) | Base de datos y persistencia de órdenes |
| [React Icons](https://react-icons.github.io/react-icons/) | Iconografía |
| [Vite](https://vitejs.dev/) | Bundler y dev server |

---

## ✨ Funcionalidades

- 🗂️ **Catálogo por categorías** — navegación desde un mega-menu agrupado por tipo de publicación
- 🔍 **Detalle de producto** — imagen, descripción, stock y selector de cantidad
- 🛒 **Carrito de compras** — agregar, quitar y eliminar productos respetando el stock disponible
- ✅ **Checkout** — formulario con datos del comprador y confirmación con ID de orden
- 💾 **Persistencia en Firestore** — las órdenes se guardan en Firebase al confirmar la compra

---

## 🗂️ Estructura del proyecto

```
src/
├── assets/
├── components/
│   ├── NavBar.jsx
│   ├── NavBarContainer.jsx
│   ├── Item.jsx
│   ├── ItemList.jsx
│   ├── ItemListContainer.jsx
│   ├── ItemDetail.jsx
│   ├── ItemDetailContainer.jsx
│   ├── CartWidget.jsx
│   ├── CartItem.jsx
│   ├── CartList.jsx
│   ├── CartContainer.jsx
│   └── Checkout.jsx
├── context/
│   ├── CartContext.jsx
│   └── CartProvider.jsx
├── firebase/
│   ├── config.js
│   └── db.js
├── App.jsx
└── main.jsx
```

---

## 🚀 Cómo correr el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/danielzitellilab-sudo/RepoReactCH.git
cd RepoReactCH
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar Firebase

Creá un archivo `src/firebase/config.js` con tus credenciales de Firebase:

```js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};

export const app = initializeApp(firebaseConfig);
```

### 4. Levantar el servidor de desarrollo

```bash
npm run dev
```

---

## 🗃️ Colecciones en Firestore

El proyecto usa tres colecciones en Firestore:

**`products`**
```
{
  name: string,
  description: string,
  price: number,
  stock: number,
  image_url: string,
  category: string[]
}
```

**`categories`**
```
{
  name: string,
  type: string   // "TP" | "Issue" | [Editorial] | [Lenguaje] | etc.
  description: string
}
```

**`orders`**
```
{
  buyer: { name, email, phone },
  items: [{ id, name, price, quantity }],
  total: number,
  date: string,
  createdAt: timestamp
}
```

---

## 👤 Autor

**Daniel Zitelli**  
Proyecto final — React JS · CoderHouse  
[GitHub](https://github.com/danielzitellilab-sudo)
