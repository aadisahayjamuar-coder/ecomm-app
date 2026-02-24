import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const username = localStorage.getItem("username");

  // 🔒 Protect Admin Page
  useEffect(() => {
    if (username !== "admin") {
      alert("Access Denied! Admin Only");
      navigate("/");
    }
  }, [username, navigate]);

  // ✅ Load products from LocalStorage
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  // ✅ Delete product permanently
  const handleDelete = (id) => {
    const updatedProducts = products.filter((p) => p.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  return (
    <>
      <Header />

      <main style={{ paddingTop: "100px" }}>
        <h2 style={{ textAlign: "center" }}>Admin Panel</h2>

        <section className="products">
          {products.length === 0 ? (
            <h3>No Products Available</h3>
          ) : (
            products.map((p) => (
              <div className="product" key={p.id}>
                <img src={p.thumbnail} alt={p.title} />
                <h3>{p.title}</h3>
                <p>${p.price}</p>

                <button
                  style={{ backgroundColor: "red", color: "white" }}
                  onClick={() => handleDelete(p.id)}
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Admin;
