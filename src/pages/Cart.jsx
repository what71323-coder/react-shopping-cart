import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { ArrowLeft, ShoppingBag, Trash2 } from "lucide-react";

function Cart({ setCurrentPage, notify }) {
  const { cart, cartCount, cartTotal, clearCart } = useCart();

  const shipping = cartTotal === 0 || cartTotal >= 999 ? 0 : 99;
  const total = cartTotal + shipping;

  return (
    <section className="cart-page">
      <div className="cart-heading">
        <div>
          <h1>Your Shopping Cart</h1>
          <p>{cartCount} items in your cart</p>
        </div>

        {cart.length > 0 && (
          <button
            className="clear-cart-btn"
            onClick={() => {
              clearCart();
              notify("Cart cleared successfully");
            }}
          >
            <Trash2 size={16} />
            Clear Cart
          </button>
        )}
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">
            <ShoppingBag size={40} />
          </div>

          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added anything yet.</p>

          <button
            className="continue-btn"
            onClick={() => setCurrentPage("home")}
          >
            <ArrowLeft size={17} />
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items-list">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} notify={notify} />
            ))}

            <button
              className="continue-shopping"
              onClick={() => setCurrentPage("home")}
            >
              <ArrowLeft size={16} />
              Continue Shopping
            </button>
          </div>

          <div className="order-summary">
            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Total Units</span>
              <span>{cartCount}</span>
            </div>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{cartTotal.toLocaleString("en-IN")}</span>
            </div>

            <div className="summary-row">
              <span>Delivery</span>
              <span>
                {shipping === 0 ? "FREE" : `₹${shipping}`}
              </span>
            </div>

            {cartTotal > 0 && cartTotal < 999 && (
              <p className="shipping-note">
                Add ₹{(999 - cartTotal).toLocaleString("en-IN")} more for free delivery.
              </p>
            )}

            <div className="summary-divider" />

            <div className="summary-total">
              <span>Total</span>
              <strong>₹{total.toLocaleString("en-IN")}</strong>
            </div>

            <button
              className="checkout-btn"
              onClick={() => notify("Checkout feature coming soon!")}
            >
              Proceed to Checkout
            </button>

            <p className="secure-note">
              Secure checkout · Easy returns
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Cart;