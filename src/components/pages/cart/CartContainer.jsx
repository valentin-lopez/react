import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import "./CartContainer.css";

const CartContainer = () => {
  const { products, emptyCart, removeById } = useContext(CartContext);

  return (
    <div className="CartContainer">
      <h1>Aca el carrito</h1>
      <button type="button" onClick={() => emptyCart()}>
        Vaciar Carrito
      </button>
      <Link to="/checkout" style={{ color: "black" }}>
        Finalizar compra
      </Link>
      <div>
        {products.length > 0 ? (
          <ul className="productsContainer">
            {products.map((product) => (
              <li key={product.id}>
                <div>
                  <span>{product.name}</span> |{" "}
                  <span>Precio: {product.price}</span> |{" "}
                  <span>Cantidad: {product.quantity}</span>
                </div>
                <button
                  className="removeButton"
                  type="button"
                  onClick={() => removeById(product.id)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <span>No hay productos</span>
        )}
      </div>
    </div>
  );
};

export default CartContainer;
