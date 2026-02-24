import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Products1() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");

    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    } else {
      axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          setProducts(res.data.products);
          localStorage.setItem(
            "products",
            JSON.stringify(res.data.products)
          );
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const handleAddToCart = (product) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
      alert("Please login first!");
      navigate("/login");
      return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item added to cart!");
  };

  return (
    <>
      <Header />

      <main style={{ paddingTop: "100px" }}>
        <section className="products">
          {products.map((p) => (
            <div className="product" key={p.id}>
              <img src={p.thumbnail} alt={p.title} />
              <h3>{p.title}</h3>
              <p>Category: {p.category}</p>
              <p>Price: ${p.price}</p>
              <button onClick={() => handleAddToCart(p)}>
                Add to Cart
              </button>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Products1;
