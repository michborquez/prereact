import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

const formatPrecio = (n) => `$${n.toLocaleString("es-AR")}`;

export default function Cart() {
  const { cart, removeFromCart, clearCart, getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart">
        <div className="empty">
          <div className="empty__icon">🛒</div>
          <h2>Tu carrito está vacío</h2>
          <p>Todavía no agregaste ninguna flor ni regalo.</p>
          <Link to="/" className="btn">
            Ver catálogo
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section>
      <h2 className="section-title">🛒 Mi Carrito de Compras</h2>
      <p className="section-subtitle">Revisá tu pedido antes de finalizar</p>

      <div className="cart">
        {cart.map((p) => (
          <div className="cart__row" key={p.id}>
            <div className="cart__thumb" style={{ background: p.color }}>
              {p.emoji}
            </div>
            <div>
              <p className="cart__name">{p.nombre}</p>
              <p className="cart__unit">
                {formatPrecio(p.precio)} c/u · Cantidad: {p.cantidad}
              </p>
            </div>
            <p className="cart__subtotal">
              {formatPrecio(p.precio * p.cantidad)}
            </p>
            <button
              type="button"
              className="btn btn--danger"
              onClick={() => removeFromCart(p.id)}
            >
              Quitar
            </button>
          </div>
        ))}

        <div className="cart__footer">
          <p className="cart__total">
            Total: <span>{formatPrecio(getCartTotal())}</span>
          </p>
          <div className="detail__actions">
            <button type="button" className="btn btn--danger" onClick={clearCart}>
              Vaciar carrito
            </button>
            <Link to="/" className="btn btn--outline">
              Seguir comprando
            </Link>
            <button type="button" className="btn">
              Finalizar compra
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
