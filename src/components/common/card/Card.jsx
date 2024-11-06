import React from "react";
import "./card.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <a href={`/item/${product.id}`} className="product-name">
        {product.name}
      </a>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <button className="add-to-cart">Añadir al Carrito</button>
    </div>
  );
};

export default ProductCard;
