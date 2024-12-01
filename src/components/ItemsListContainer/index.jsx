import { useEffect, useState } from "react";
import Card from "../common/card/Card";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import productsData from "../../data/products.json";

const ItemsListContainer = () => {
  const [productsList, setProductsList] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, "products");
        let queryRef = productsCollection;

        if (category) {
          queryRef = query(
            productsCollection,
            where("category", "==", category)
          );
        }

        const querySnapshot = await getDocs(queryRef);

        const fetchedProducts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProductsList(fetchedProducts);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <div className="product-list">
      {productsList.length > 0 ? (
        productsList.map((product) => (
          <Card key={product.id} product={product} />
        ))
      ) : (
        <p>No hay productos disponibles en esta categoría.</p>
      )}
    </div>
  );
};

export default ItemsListContainer;
