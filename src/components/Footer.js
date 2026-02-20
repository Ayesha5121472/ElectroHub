function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 pt-5 pb-3">
      <div className="container">
        <div className="row">

         
          <div className="col-md-3">
            <h5>ElectroHub</h5>
            <p>
              Your one-stop online store for the latest products at the best prices.
            </p>
          </div>

         
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/products" className="text-white text-decoration-none">Products</a></li>
              <li><a href="/cart" className="text-white text-decoration-none">Cart</a></li>
              <li><a href="/login" className="text-white text-decoration-none">Login</a></li>
            </ul>
          </div>

         
          <div className="col-md-3">
            <h5>Contact</h5>
            <p>Email: support@devshop.com</p>
            <p>Phone: +92 300 1234567</p>
            <p>Location: Pakistan</p>
          </div>

          
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <a href="#!" className="text-white me-3">
              <i className="bi bi-facebook"></i> Facebook
            </a><br />
            <a href="#!" className="text-white me-3">
              <i className="bi bi-instagram"></i> Instagram
            </a><br />
            <a href="#!" className="text-white">
              <i className="bi bi-twitter"></i> Twitter
            </a>
          </div>

        </div>

        <hr className="bg-light" />

        <div className="text-center">
          <p>&copy; {new Date().getFullYear()}  ElectroHub. All rights reserved.</p>
          <a href="#!" className="text-white me-3">Privacy Policy</a>
          <a href="#!" className="text-white me-3">Terms of Service</a>
          <a href="#!" className="text-white">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;