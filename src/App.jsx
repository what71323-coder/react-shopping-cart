import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { CheckCircle } from "lucide-react";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [notification, setNotification] = useState("");

  const notify = (message) => {
    setNotification(message);
  };

  useEffect(() => {
    if (!notification) return;

    const timer = setTimeout(() => {
      setNotification("");
    }, 2500);

    return () => clearTimeout(timer);
  }, [notification]);

  return (
    <div className="app">
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <main>
        {currentPage === "home" ? (
          <Home
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
            notify={notify}
          />
        ) : (
          <Cart
            setCurrentPage={setCurrentPage}
            notify={notify}
          />
        )}
      </main>

      {notification && (
        <div className="toast">
          <CheckCircle size={19} />
          {notification}
        </div>
      )}

      <footer className="footer">
        <p>© 2026 ShopNest. Built with React Context API.</p>
      </footer>
    </div>
  );
}

export default App;