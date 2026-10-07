import TeamCard from "./TeamCard.jsx";

const equipo = [
  {
    nombre: "Micaela Borquez",
    rol: "Fundadora y Florista",
    email: "mica@petalsandco.com",
    emoji: "🌷",
  },
  {
    nombre: "Lucas Fernández",
    rol: "Diseño y Desarrollo Web",
    email: "lucas@petalsandco.com",
    emoji: "💻",
  },
  {
    nombre: "Sofía Ramírez",
    rol: "Atención al Cliente",
    email: "sofia@petalsandco.com",
    emoji: "💬",
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <section className="footer__company">
            <h3>Petals & Co.</h3>
            <p>
              Florería y regalería con diseños florales exclusivos para alegrar
              los días de las personas que más querés. Envíos a domicilio en
              toda la Ciudad de Buenos Aires.
            </p>
            <ul>
              <li>📍 Av. Corrientes y Av. 9 de Julio, CABA</li>
              <li>📞 +54 11 5555-0123</li>
              <li>✉️ hola@petalsandco.com</li>
              <li>🕒 Lun a Sáb de 9 a 19 hs</li>
            </ul>
          </section>

          <section className="footer__team">
            <h4>Nuestro equipo</h4>
            <div className="team">
              {equipo.map((p) => (
                <TeamCard key={p.email} {...p} />
              ))}
            </div>
          </section>
        </div>

        <div className="footer__bottom">
          © 2026 Petals & Co. Florería & Regalería. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
