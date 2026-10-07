import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (producto, cantidad) => {
    setCart((prev) => {
      const existente = prev.find((p) => p.id === producto.id);
      if (existente) {
        return prev.map((p) =>
          p.id === producto.id
            ? { ...p, cantidad: Math.min(p.cantidad + cantidad, producto.stock) }
            : p
        );
      }
      return [...prev, { ...producto, cantidad }];
    });
  };

  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((p) => p.id !== id));

  const clearCart = () => setCart([]);

  const getCartQuantity = () =>
    cart.reduce((acc, p) => acc + p.cantidad, 0);

  const getCartTotal = () =>
    cart.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  const getItemQuantity = (id) =>
    cart.find((p) => p.id === id)?.cantidad ?? 0;

  const value = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    getCartQuantity,
    getCartTotal,
    getItemQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
  return ctx;
}

export default CartContext;
