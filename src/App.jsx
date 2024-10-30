import { Navbar } from "./components/Navbar";
import { ItemsListContainer } from "./components/ItemsListContainer";
import "./index.css";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <ItemsListContainer greeting="Bienvenidos" />
    </div>
  );
}

export default App;
