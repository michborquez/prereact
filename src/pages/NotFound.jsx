import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="empty">
      <div className="empty__icon">🥀</div>
      <h2>Página no encontrada</h2>
      <p>La página que buscás no existe.</p>
      <Link to="/" className="btn">
        Volver al inicio
      </Link>
    </div>
  );
}
