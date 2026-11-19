import ProductList from "../components/ProductList";
import products from "../data/products";
import { ArrowRight, Truck, ShieldCheck, Headphones } from "lucide-react";

function Home({
  search,
  setSearch,
  category,
  setCategory,
  notify
}) {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">THE EVERYDAY COLLECTION</span>

          <h1>
            Good finds.
            <br />
            <span>Better living.</span>
          </h1>

          <p>
            Discover everyday essentials and things you didn't
            know you needed. All in one place.
          </p>

          <button
            className="hero-btn"
            onClick={() =>
              document.getElementById("catalog")?.scrollIntoView({
                behavior: "smooth"
              })
            }
          >
            Shop collection <ArrowRight size={18} />
          </button>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80"
            alt="Shopping collection"
          />
        </div>
      </section>

      <section className="benefits">
        <div className="benefit">
          <Truck size={23} />
          <div>
            <strong>Free Shipping</strong>
            <span>On orders above ₹999</span>
          </div>
        </div>

        <div className="benefit">
          <ShieldCheck size={23} />
          <div>
            <strong>Secure Payments</strong>
            <span>Safe & secure checkout</span>
          </div>
        </div>

        <div className="benefit">
          <Headphones size={23} />
          <div>
            <strong>Customer Support</strong>
            <span>Here to help you</span>
          </div>
        </div>
      </section>

      <div id="catalog">
        <ProductList
          products={products}
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          notify={notify}
        />
      </div>
    </>
  );
}

export default Home;