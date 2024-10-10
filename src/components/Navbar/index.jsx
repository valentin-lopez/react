import "./Navbar.css"
import { CartWidget } from "../CartWidget"

export const Navbar = () => {
  return (
    <header className="navbarContainer">
      <span className="logo">
        Nombre de la tienda
      </span>
      <ul className="categories"> {/*los button van con onClick={() => funcion()} */}
        <li><button>Cat1</button></li>
        <li><button>Cat2</button></li>
        <li><button>Cat3</button></li>
      </ul>
      <CartWidget itemsCount={6}/>

    </header>
  )
}