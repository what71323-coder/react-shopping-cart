import { createContext, useContext, useReducer, useEffect } from "react";
import { cartReducer, initialCartState } from "../reducers/cartReducer";

const CartContext = createContext();

function getInitialCart() {
  try {
    const savedCart = localStorage.getItem("shopping-cart");

    if (!savedCart) return initialCartState;

    const parsedCart = JSON.parse(savedCart);

    if (!Array.isArray(parsedCart)) return initialCartState;

    return parsedCart.filter(
      (item) =>
        item &&
        typeof item.id === "number" &&
        typeof item.quantity === "number" &&
        item.quantity > 0 &&
        typeof item.price === "number"
    );
  } catch {
    return initialCartState;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, undefined, getInitialCart);

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const increaseQuantity = (id) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: id });
  };

  const decreaseQuantity = (id) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const value = {
    cart,
    cartCount,
    cartTotal,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}