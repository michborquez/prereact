import { Link } from "react-router-dom";

const formatPrecio = (n) => `$${n.toLocaleString("es-AR")}`;

export default function Item({ id, nombre, categoria, precio, emoji, color }) {
  return (
    <article className="item-card">
      <div className="item-card__img" style={{ background: color }}>
        <span role="img" aria-label={nombre}>
          {emoji}
        </span>
      </div>
      <div className="item-card__body">
        <span className="item-card__cat">{categoria}</span>
        <h3 className="item-card__title">{nombre}</h3>
        <p className="item-card__price">{formatPrecio(precio)}</p>
        <Link to={`/producto/${id}`} className="btn">
          Ver detalle
        </Link>
      </div>
    </article>
  );
}
