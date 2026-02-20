import { useNavigate } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer"; 

function Home({ addToCart }) {
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate("/products"); 
  };

  return (
    <div>
    
      <div className="container mt-5">
        <div className="hero p-5 rounded">
          <h1>Welcome to ElectroHub</h1>
          <p className="mt-3">
            Discover amazing products with the best deals. Your one-stop solution for electronics and gadgets!
          </p>
          <button
            className="btn btn-light mt-3 px-4"
            onClick={goToProducts}
          >
            Shop Now
          </button>
        </div>
      </div>

      <div className="container mt-5">
        <h2>About Us</h2>
        <p className="mt-3">
          ElectroHub is a modern e-commerce platform offering high-quality products at competitive prices. 
          Our mission is to provide an effortless shopping experience with fast delivery and excellent customer service.
        </p>
      </div>

      
      <div className="container mt-5">
        <h2>Featured Products</h2>
        <div className="row mt-3">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
        <div className="text-center mt-3">
          <button className="btn btn-primary" onClick={goToProducts}>
            View All Products
          </button>
        </div>
      </div>

     
      <Footer /> 
    </div>
  );
}

export default Home;
