import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

function ProductCard({ product, notify }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    notify(`${product.name} added to cart!`);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />

        <span className="product-category">
          {product.category}
        </span>
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-bottom">
          <span className="product-price">
            ₹{product.price.toLocaleString("en-IN")}
          </span>

          <button
            className="add-cart-btn"
            onClick={handleAddToCart}
          >
            <ShoppingCart size={17} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;