import { Outlet } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import SearchIcon from "../../assets/images/search.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../contexts/CartContext";

export default function Navbar() {
 const { cart, setCart } = useCartContext()
  return (
    <>

    <header>
      <div className="logo">
        <Link to="/">
        <img src={Logo} alt="logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">
              <img className="search-icon" src={SearchIcon} alt="search-icon" />
            </a>
          </li>
          <li >
            <Link to="/cart">
            <ShoppingCartIcon className="cart-icon"/>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    <Outlet />
    </>
  );
}
