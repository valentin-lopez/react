import Layout from "./components/Layout/Layout";
import ItemsListContainer from "./components/ItemsListContainer";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailsContainer from "./components/ItemDetailsContainer/index";
import CartContainer from "./components/pages/cart/CartContainer";
import { CartContextProvider } from "./context/CartContext";
import Checkout from "./components/pages/checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ItemsListContainer />} />
            <Route
              path="/category/:category"
              element={<ItemsListContainer />}
            />
            <Route path="/item/:id" element={<ItemDetailsContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
