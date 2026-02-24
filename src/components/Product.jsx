
import Footer from "./Footer";
import Header from "./Header";
import img1 from "./mobile.jpg"
import { useNavigate } from "react-router-dom";

function Product({ name, price, onAddToCart }) {
    const navigate = useNavigate();
    const handleAddToCart = () => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (isLoggedIn=="true") {
           navigate("/cart");
        } else {
            alert("Please log in to add items to your cart.");
            navigate("/login");
        }
    };
  return (
    <>
        <Header/>
        <div className="Products">
           
                <div className="Product">
                    <img src={img1} alt={name} />
                    <h3>{name}</h3>
                    <p>Rs.50,000</p>
                    <button onClick={handleAddToCart}
                    
                    
                    >Add to Cart</button>

                </div>
                
                <div className="Product">
                    <img src={img1} alt={name} />
                    <h3>{name}</h3>
                    <p>Rs.50,000</p>
                    <button onClick={handleAddToCart}>Add to Cart</button>

                </div>
                <div className="Product">
                    <img src={img1} alt={name} />
                    <h3>{name}</h3>
                    <p>Rs.50,000</p>
                    <button onClick={handleAddToCart}>Add to Cart</button>

                </div>
                <div className="Product">
                    <img src={img1} alt={name} />
                    <h3>{name}</h3>
                    <p>Rs.50,000</p>
                    <button onClick={handleAddToCart}>Add to Cart</button>

                </div>
               

         </div>
          <Footer/> 
         
    </>
  )
}
export default Product;