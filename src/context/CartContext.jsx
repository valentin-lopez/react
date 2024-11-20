import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));

    console.log(products);
  }, [products]);

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("products"));
    setProducts(products || []);
  }, []);

  const addToCart = (product) => {
    const isInCart = products.some((el) => el.id === product.id);

    if (isInCart) {
      const nuevoArray = products.map((elemento) => {
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: elemento.quantity + 1,
          };
        } else {
          return elemento;
        }
      });

      setProducts(nuevoArray);
    } else {
      setProducts([...products, { ...product, quantity: 1 }]);
    }
  };

  const emptyCart = () => {
    setProducts([]);
  };

  const removeById = (id) => {
    let arrayFiltrado = products.filter((elemento) => elemento.id !== id);
    setProducts(arrayFiltrado);
  };

  const getTotalQuantity = (id) => {
    const product = products.find((elemento) => elemento.id === id);

    if (!product) {
      return 0;
    }

    return product.quantity;
  };

  const getProductsCount = () => {
    const count = products.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);

    return count;
  };

  const getTotalAmount = (productsList) => {
    const total = productsList.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.quantity;
    }, 0);

    return total;
  };

  let data = {
    products,
    addToCart,
    removeById,
    emptyCart,
    getTotalQuantity,
    getTotalAmount,
    getProductsCount,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
