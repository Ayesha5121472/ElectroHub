import { Link } from "react-router-dom";

function ProductCard({ product, addToCart }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={product.image}
          className="card-img-top"
          alt={product.name}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <div className="mt-auto d-flex justify-content-between align-items-center">
            <span className="fw-bold">{product.price}</span>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
          <Link
            to={`/product/${product.id}`}
            className="btn btn-link btn-sm mt-2 p-0"
          >
            View Details
          </Link>
          
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
