import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [ConformPassword, setConformPassword] = useState("");
  const navigate = useNavigate();
  const em = /^[^\s@]+@[^\s]+.[^\s@]$/;
  const handelRegister = () => {
    if (email === "" || password === "" || ConformPassword === "") {
      setError("Please fill all fields");
      return;
    }
    if (ConformPassword !== password) {
      setError("password do not match");
      return;
    }
    if (!em.test(email)) {
      setError("Enter vaild email");
      return;
    }

    setError("");
    navigate("/");
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h1>Register</h1>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="enter email id"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
          />
        </div>
        <div>
          <label> confirm Password</label>
          <input
            type="password"
            placeholder="confirm password"
            value={ConformPassword}
            onChange={(e) => {
              setConformPassword(e.target.value);
              setError("");
            }}
          />
        </div>
        <button onClick={handelRegister}>Register</button>
        {error && <p className="register-error">{error}</p>}
        <p>
          Already have an account? <Link to="/">Log in</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
