import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Item from "./Item.jsx";

const categorias = [
  { id: undefined, label: "Todos", to: "/" },
  { id: "ramos", label: "Ramos", to: "/categoria/ramos" },
  { id: "plantas", label: "Plantas", to: "/categoria/plantas" },
  { id: "regalos", label: "Regalos", to: "/categoria/regalos" },
];

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Carga los productos desde el archivo local productos.json
  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`${import.meta.env.BASE_URL}productos.json`)
      .then((res) => {
        if (!res.ok) throw new Error("No se pudo cargar el catálogo");
        return res.json();
      })
      .then((data) => {
        setProductos(
          categoryId ? data.filter((p) => p.categoria === categoryId) : data
        );
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <section>
      {!categoryId && (
        <div className="hero">
          <h1>Flores frescas & regalos con amor</h1>
          <p>
            Diseños florales exclusivos para alegrar los días de las personas
            que más querés.
          </p>
        </div>
      )}

      <h2 className="section-title">
        {categoryId
          ? categoryId.charAt(0).toUpperCase() + categoryId.slice(1)
          : "Nuestras Flores y Regalos"}
      </h2>
      <p className="section-subtitle">
        Productos frescos y artesanales seleccionados para vos
      </p>

      <div className="filters">
        {categorias.map((c) => (
          <Link
            key={c.label}
            to={c.to}
            className={"filters__btn" + (c.id === categoryId ? " active" : "")}
          >
            {c.label}
          </Link>
        ))}
      </div>

      {loading && <p className="loading">Cargando productos...</p>}
      {error && <p className="loading">{error}</p>}

      {!loading && !error && (
        <div className="item-list">
          {productos.map((p) => (
            <Item key={p.id} {...p} />
          ))}
        </div>
      )}
    </section>
  );
}
