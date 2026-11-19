import { ShoppingBag, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

function Navbar({ currentPage, setCurrentPage }) {
  const { cartCount } = useCart();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div
          className="brand"
          onClick={() => setCurrentPage("home")}
        >
          <ShoppingBag size={25} />
          <span>Shop<span className="brand-highlight">Nest</span></span>
        </div>

        <div className="nav-links">
          <button
            className={currentPage === "home" ? "nav-link active" : "nav-link"}
            onClick={() => setCurrentPage("home")}
          >
            Home
          </button>

          <button
            className={currentPage === "cart" ? "nav-link active" : "nav-link"}
            onClick={() => setCurrentPage("cart")}
          >
            Cart
          </button>
        </div>

        <button
          className="cart-nav-btn"
          onClick={() => setCurrentPage("cart")}
        >
          <ShoppingCart size={20} />
          <span>Cart</span>
          <span className="cart-badge">{cartCount}</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;