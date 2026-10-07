# Petals & Co. – Florería y Regalería

E-commerce en React (Vite) con catálogo desde `productos.json`, detalle de producto y carrito con Context API.

## Cómo correrlo

```bash
npm install
npm run dev
```

## Estructura

```
petals-co/
├── public/
│   └── productos.json          # Catálogo local (se carga con fetch)
├── src/
│   ├── components/
│   │   ├── Layout.jsx          # Header + <Outlet/> + Footer
│   │   ├── Header.jsx
│   │   ├── NavBar.jsx          # Links + CartWidget
│   │   ├── CartWidget.jsx      # Ícono + cantidad desde CartContext
│   │   ├── Footer.jsx          # Info de empresa + 3 TeamCard
│   │   ├── TeamCard.jsx
│   │   ├── ItemListContainer.jsx  # useEffect + fetch de productos.json
│   │   ├── Item.jsx            # Tarjeta reutilizable (props)
│   │   ├── ItemDetailContainer.jsx
│   │   └── ItemCount.jsx
│   ├── context/
│   │   └── CartContext.jsx     # Estado global del carrito (addToCart, etc.)
│   ├── pages/
│   │   ├── Cart.jsx            # Ruta /carrito
│   │   └── NotFound.jsx
│   ├── styles/index.css
│   ├── App.jsx                 # Rutas
│   └── main.jsx
└── index.html
```

## Rutas

| Ruta                    | Descripción                  |
| ----------------------- | ---------------------------- |
| `/`                     | Catálogo completo            |
| `/categoria/:categoryId`| Catálogo filtrado            |
| `/producto/:id`         | Detalle + agregar al carrito |
| `/carrito`              | Detalle del carrito          |
