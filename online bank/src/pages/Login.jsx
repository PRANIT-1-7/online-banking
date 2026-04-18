import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const em = /^[^\s@]+@[^\s]+.[^\s@]$/;
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleLogin = () => {
    if (email === "" || password === "") {
      setError("Please fill all fields");

      return;
    }
    if (!em.test(email)) {
      setError("enter vaild email");
      return;
    }

    setError("");
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>

        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
          />
        </div>

        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
          />
        </div>

        <button onClick={handleLogin}>Login</button>
        {error && <p className="login-error">{error}</p>}

        <p>
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
