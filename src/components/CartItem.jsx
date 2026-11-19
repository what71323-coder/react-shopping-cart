import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";

function CartItem({ item, notify }) {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart
  } = useCart();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />

      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p className="cart-item-category">{item.category}</p>

        <span className="cart-item-price">
          ₹{item.price.toLocaleString("en-IN")}
        </span>

        <div className="quantity-controls">
          <button
            onClick={() => decreaseQuantity(item.id)}
            aria-label="Decrease quantity"
          >
            <Minus size={15} />
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() => increaseQuantity(item.id)}
            aria-label="Increase quantity"
          >
            <Plus size={15} />
          </button>
        </div>
      </div>

      <div className="cart-item-right">
        <strong>
          ₹{(item.price * item.quantity).toLocaleString("en-IN")}
        </strong>

        <button
          className="remove-btn"
          onClick={() => {
            removeFromCart(item.id);
            notify(`${item.name} removed from cart`);
          }}
          aria-label="Remove product"
        >
          <Trash2 size={17} />
        </button>
      </div>
    </div>
    );
}

export default CartItem;