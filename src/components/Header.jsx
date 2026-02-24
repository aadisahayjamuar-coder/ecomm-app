import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const username = localStorage.getItem("username");
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("cart");
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <header>
      <h1>🛍 KL University Shop</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/products1">Products</Link>

        {/* 🔥 Admin Link (only for admin) */}
        {username === "admin" && isLoggedIn === "true" && (
          <Link to="/admin">Admin</Link>
        )}

        {/* 🔥 If Logged In */}
        {isLoggedIn === "true" ? (
          <>
            <Link to="/cart">Cart</Link>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </>
        ) : (
          /* 🔥 If Not Logged In */
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </nav>

      <div id="user-display">
        {isLoggedIn === "true"
          ? `Welcome, ${username}`
          : "Please log in"}
      </div>
    </header>
  );
}

export default Header;
