import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./History.css";
function History() {
  const transactions = [
    { email: "user1@gmail.com", amount: 500 },
    { email: "user2@gmail.com", amount: 1000 },
  ];
  const navigate = useNavigate();
  const handelback = () => {
    navigate("/dashboard");
  };
  return (
    <div className="history-container">
      <div className="history-main">
        <h1>Transaction History</h1>
        <div>
          {transactions.map((t, index) => (
            <p key={index}>
              ₹{t.amount} → {t.email}
            </p>
          ))}
        </div>

        <div>
          <button onClick={handelback}>Back</button>
        </div>
      </div>
    </div>
  );
}

export default History;
