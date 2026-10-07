import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ItemCount from "./ItemCount.jsx";
import { useCart } from "../context/CartContext.jsx";

const formatPrecio = (n) => `$${n.toLocaleString("es-AR")}`;

export default function ItemDetailContainer() {
  const { id } = useParams();
  const { addToCart, getItemQuantity } = useCart();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [agregado, setAgregado] = useState(false);

  useEffect(() => {
    setLoading(true);
    setAgregado(false);

    fetch(`${import.meta.env.BASE_URL}productos.json`)
      .then((res) => res.json())
      .then((data) => {
        setProducto(data.find((p) => p.id === Number(id)) ?? null);
      })
      .catch(() => setProducto(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="loading">Cargando producto...</p>;

  if (!producto) {
    return (
      <div className="empty">
        <div className="empty__icon">🥀</div>
        <h2>Producto no encontrado</h2>
        <p>El producto que buscás no existe o ya no está disponible.</p>
        <Link to="/" className="btn">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  const enCarrito = getItemQuantity(producto.id);
  const disponible = producto.stock - enCarrito;

  const handleAdd = (cantidad) => {
    addToCart(producto, cantidad);
    setAgregado(true);
  };

  return (
    <section>
      <Link to="/" className="back-link">
        ← Volver al catálogo
      </Link>

      <article className="detail">
        <div className="detail__img" style={{ background: producto.color }}>
          <span role="img" aria-label={producto.nombre}>
            {producto.emoji}
          </span>
        </div>

        <div className="detail__info">
          <span className="item-card__cat">{producto.categoria}</span>
          <h2>{producto.nombre}</h2>
          <p>{producto.descripcion}</p>
          <p className="detail__price">{formatPrecio(producto.precio)}</p>
          <p className="detail__stock">
            Stock disponible: {disponible}
            {enCarrito > 0 && ` (ya tenés ${enCarrito} en el carrito)`}
          </p>

          {disponible > 0 ? (
            // key para reiniciar el contador cuando cambia el stock disponible
            <ItemCount key={disponible} stock={disponible} onAdd={handleAdd} />
          ) : (
            <p className="detail__stock">
              Ya agregaste todo el stock disponible de este producto.
            </p>
          )}

          {agregado && (
            <div className="detail__actions">
              <span className="added-msg">✓ Producto agregado al carrito</span>
              <Link to="/carrito" className="btn btn--outline">
                Ir al carrito
              </Link>
            </div>
          )}
        </div>
      </article>
    </section>
  );
}
