import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products({ addToCart }) {
  return (
    <div className="container mt-5">
      <h2>All Products</h2>
      <div className="row mt-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

    </div>
    
  );
}

export default Products;
