import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Transfer.css";
function Transfer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const handelback = () => {
    navigate("/dashboard");
  };
  const em = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handelTransfer = () => {
    if (email === "" || amount === "") {
      setError("Please fill all fields");
      return;
    }
    if (!em.test(email)) {
      setError("invalid email");
      return;
    }

    if (Number(amount) <= 0) {
      setError("Enter valid amount");
      return;
    }
    setError("");
    alert("Transfer successful");
  };
  return (
    <div className="transfer-container">
      <div className="transfer-main">
        <h1>Transfer Money</h1>
        <div>
          <label>Recevier mail</label>
          <input
            type="email"
            placeholder="Enter recevier mail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
          />
          <label>Amount</label>
          <input
            type="number"
            placeholder="Enter amout"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
              setError("");
            }}
          />
        </div>
        {error && <p className="transfer-error">{error}</p>}
        <div className="transfer-button">
          <button onClick={handelTransfer}>Transfer</button>
          <button onClick={handelback}>Back</button>
        </div>
      </div>
    </div>
  );
}

export default Transfer;
