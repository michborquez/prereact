import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget.jsx";

const links = [
  { to: "/", label: "Inicio", end: true },
  { to: "/categoria/ramos", label: "Ramos" },
  { to: "/categoria/plantas", label: "Plantas" },
  { to: "/categoria/regalos", label: "Regalos" },
];

export default function NavBar() {
  return (
    <nav className="navbar" aria-label="Navegación principal">
      <ul className="navbar__links">
        {links.map((l) => (
          <li key={l.to}>
            <NavLink
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                "navbar__link" + (isActive ? " active" : "")
              }
            >
              {l.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <CartWidget />
    </nav>
  );
}
