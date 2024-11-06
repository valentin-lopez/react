import { useParams } from "react-router-dom";
import productsData from "../../data/products.json";
import { useEffect, useState } from "react";

const itemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const product = productsData.find((product) => product.id === id);
    setProduct(product);
  }, [id]);

  if (!product) return <p>Cargando...</p>;

  return (
    <div className="wrapper">
      <img src={product.image} alt={product.name} className="product-image" />
      <a href={`/items/${product.id}`} className="product-name">
        {product.name}
      </a>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <button className="add-to-cart">Añadir al Carrito</button>
    </div>
  );
};

export default itemDetailContainer;
