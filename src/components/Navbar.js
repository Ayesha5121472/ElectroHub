import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar({ cartCount, onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">

      
        <Link className="navbar-brand" to="/">ElectroHub</Link>

      
        <div className="d-flex align-items-center gap-2">
          <Link className="btn btn-outline-light" to="/">Home</Link>
          <Link className="btn btn-outline-light" to="/products">Products</Link>
          <Link className="btn btn-outline-light" to="/cart">
            Cart ({cartCount})
          </Link>
          <Link className="btn btn-outline-light" to="/login">Login</Link>
          <Link className="btn btn-warning" to="/admin">Admin</Link>
        </div>

       
        <form className="d-flex ms-auto" onSubmit={handleSearch}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-warning" type="submit">
            Search
          </button>
        </form>

      </div>
    </nav>
  );
}

export default Navbar;