import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./components/Style.css";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Products1 from "./components/Products1";
import Signup from "./components/Signup";
import Admin from "./components/Admin";
function App() {
  return (
    <>
      <HashRouter>
        <Routes>
  <Route path="/" element={<Home />} />

 <Route path="/Products1" element={<Products1 />} />
  {/* <Route path="/Products" element={<Product />} /> */}
  <Route path="/login" element={<Login />} />
  <Route path="/Cart" element={<Cart />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/admin" element={<Admin />} />
</Routes>
      </HashRouter>
    </>
  );
}

export default App;