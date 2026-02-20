import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";

function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center mt-5">Product Not Found</h2>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart");  
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Image Column */}
        <div className="col-md-6 d-flex justify-content-center">
          <img
            src={product.image}
            alt={product.name}
            className="product-detail-img"
          />
        </div>

        {/* Info Column */}
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <h4>${product.price}</h4>
          <p>{product.description}</p>
          <button className="btn btn-success" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;