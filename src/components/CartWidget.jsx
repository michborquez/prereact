import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function CartWidget() {
  const { getCartQuantity } = useCart();
  const total = getCartQuantity();

  return (
    <Link
      to="/carrito"
      className="cart-widget"
      aria-label={`Ir al carrito, ${total} productos`}
    >
      <span className="cart-widget__icon" aria-hidden="true">
        🛒
      </span>
      <span className="cart-widget__badge">{total}</span>
    </Link>
  );
}
