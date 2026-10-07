import { Link } from "react-router-dom";
import NavBar from "./NavBar.jsx";

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__brand">
          Petals <span>&</span> Co.
        </Link>
        <NavBar />
      </div>
    </header>
  );
}
