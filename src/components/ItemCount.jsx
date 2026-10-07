import { useState } from "react";

export default function ItemCount({ stock, onAdd }) {
  const [cantidad, setCantidad] = useState(1);

  const sumar = () => setCantidad((c) => Math.min(c + 1, stock));
  const restar = () => setCantidad((c) => Math.max(c - 1, 1));

  return (
    <div className="item-count">
      <div className="item-count__controls">
        <button type="button" onClick={restar} aria-label="Restar uno">
          −
        </button>
        <span>{cantidad}</span>
        <button type="button" onClick={sumar} aria-label="Sumar uno">
          +
        </button>
      </div>
      <button
        type="button"
        className="btn"
        disabled={stock === 0}
        onClick={() => onAdd(cantidad)}
      >
        Agregar al carrito
      </button>
    </div>
  );
}
