import { NavLink } from "react-router-dom";
import "./styles.css";

export const Navbar = () => {
  return (
    <header className="nav-container">
      <div className="nav-logo">
        <h1>Barberck</h1>
      </div>
      <nav>
        <li>
          <NavLink>Services</NavLink>
        </li>
        <li>
          <NavLink>Products</NavLink>
        </li>
      </nav>
      <div className="nav-btn">
        <button>Contato</button>
      </div>
    </header>
  );
};
