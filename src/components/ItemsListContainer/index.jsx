import { useEffect, useState } from "react";
import Card from "../common/card/Card";
import productsData from "../../data/products.json";
import { useParams } from "react-router-dom";

const ItemsListContainer = () => {
  const [products, setProducts] = useState(productsData);
  const { category } = useParams();

  useEffect(() => {
    // Filtrar productos por categoría
    if (!category) return;
    const filteredProducts = productsData.filter(
      (product) => product.category === category
    );
    setProducts(filteredProducts);
  }, [category]);

  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map((product) => <Card key={product.id} product={product} />)
      ) : (
        <p>No hay productos disponibles en esta categoría.</p>
      )}
    </div>
  );
};

export default ItemsListContainer;
