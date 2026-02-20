import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (name && email && password) {
      alert("Signup Successful!");
      navigate("/login"); // Signup ke baad login page
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="container mt-5 col-md-4">
      <h3 className="mb-4 text-center">Create Account</h3>

      <form onSubmit={handleSignup}>
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
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type=" confirm password"
          className="form-control mb-3"
          placeholder=" Confirm Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="btn btn-primary w-100">
          Signup
        </button>
      </form>

      <p className="mt-3 text-center">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Signup;