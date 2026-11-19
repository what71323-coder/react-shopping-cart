import ProductCard from "./ProductCard";
import { Search } from "lucide-react";

function ProductList({
  products,
  search,
  setSearch,
  category,
  setCategory,
  notify
}) {
  const categories = [
    "All",
    "Electronics",
    "Fashion",
    "Accessories",
    "Home"
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="catalog-section">
      <div className="catalog-header">
        <div>
          <h2>Explore Products</h2>
          <p>Find something you'll love.</p>
        </div>

        <div className="search-box">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="category-list">
        {categories.map((item) => (
          <button
            key={item}
            className={
              category === item
                ? "category-btn selected"
                : "category-btn"
            }
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              notify={notify}
            />
          ))
        ) : (
          <div className="no-products">
            <h3>No products found</h3>
            <p>Try a different search or category.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductList;