import { useContext } from "react";
import "./card.css";
import { CartContext } from "../../../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <a href={`/item/${product.id}`} className="product-name">
        {product.name}
      </a>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <button
        type="button"
        onClick={() => addToCart(product)}
        className="add-to-cart"
      >
        Añadir al Carrito
      </button>
    </div>
  );
};

export default ProductCard;
