import "./Navbar.css";
import { CartWidget } from "../CartWidget";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const Navbar = () => {
  const { getProductsCount } = useContext(CartContext);

  return (
    <header className="navbarContainer">
      <Link to="/">
        <span className="logo">Nombre de la tienda</span>
      </Link>
      <ul className="categories">
        <li>
          <Link to="/category/tea">Tea</Link>
        </li>
        <li>
          <Link to="/category/chocolate">Chocolate</Link>
        </li>
        <li>
          <Link to="/category/coffee">Coffee</Link>
        </li>
      </ul>
      <CartWidget itemsCount={getProductsCount()} />
    </header>
  );
};
