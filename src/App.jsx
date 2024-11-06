import Layout from "./components/Layout/Layout";
import ItemsListContainer from "./components/ItemsListContainer";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailsContainer from "./components/ItemDetailsContainer/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ItemsListContainer />} />
          <Route path="/category/:category" element={<ItemsListContainer />} />
          <Route path="/item/:id" element={<ItemDetailsContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
