import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Checkout({ cart, clearCart }) {
  const navigate = useNavigate();

  // Separate state for each input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleOrder = (e) => {
    e.preventDefault();

    // Check all fields
    if (name && email && contact && city && postalCode && deliveryAddress) {
      alert("Order Placed Successfully!");
      clearCart();
      navigate("/");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="container mt-4 col-md-6">
      <h2>Checkout</h2>
      <h5>Total Amount: ${total}</h5>

      <form onSubmit={handleOrder}>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Contact No."
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />
        <input
          type="text"
          className="form-control mb-3"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Postal Code"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          required
        />
        <textarea
          className="form-control mb-3"
          placeholder="Delivery Address"
          value={deliveryAddress}
          onChange={(e) => setDeliveryAddress(e.target.value)}
          required
        ></textarea>

        <button type="submit" className="btn btn-primary w-100">
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;