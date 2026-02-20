import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      navigate("/");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="container mt-5 col-md-4">
      <h3 className="mb-4 text-center">Login</h3>

      <form onSubmit={handleLogin}>
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

        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>

      <p className="mt-3 text-center">
        Don’t have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
}

export default Login;