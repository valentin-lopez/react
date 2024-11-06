import "./Navbar.css";
import { CartWidget } from "../CartWidget";

export const Navbar = () => {
  return (
    <header className="navbarContainer">
      <a href="/">
        <span className="logo">Nombre de la tienda</span>
      </a>
      <ul className="categories">
        <li>
          <a href="/category/tea">Tea</a>
        </li>
        <li>
          <a href="/category/chocolate">Chocolate</a>
        </li>
        <li>
          <a href="/category/coffee">Coffee</a>
        </li>
      </ul>
      <CartWidget itemsCount={6} />
    </header>
  );
};
