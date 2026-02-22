import { Link } from "react-router-dom";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

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
          <Link className="btn btn-outline-light" to="/login">Login</Link>
          <Link className="btn btn-warning" to="/admin">Admin</Link>
        </div>

        {/* Search + Cart Icon */}
        <div className="d-flex align-items-center ms-auto gap-3">
          
          <form className="d-flex" onSubmit={handleSearch}>
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

          {/* Cart Icon */}
          <Link to="/cart" className="position-relative text-light fs-4">
            <FaShoppingCart />
            {cartCount > 0 && (
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{ fontSize: "0.7rem" }}
              >
                {cartCount}
              </span>
            )}
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;