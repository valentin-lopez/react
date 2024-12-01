import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.warn("El producto con el ID especificado no existe.");
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };

    if (id) {
      fetchProduct();
    }
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

export default ItemDetailContainer;
