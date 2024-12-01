import { useEffect, useState } from "react";
import Card from "../common/card/Card";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const ItemsListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, "products");
        const querySnapshot = await getDocs(productsCollection);

        const fetchedProducts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const filteredProducts = category
          ? fetchedProducts.filter(
              (product) =>
                product.category.toLowerCase() === category.toLowerCase()
            )
          : fetchedProducts;

        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };

    fetchProducts();
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
