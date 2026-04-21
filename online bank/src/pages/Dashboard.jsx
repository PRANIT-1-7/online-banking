import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const handelDashboard = () => {
    navigate("/transfer");
  };
  const logout = () => {
    navigate("/");
  };
  const handelHistory = () => {
    navigate("/history");
  };
  return (
    <div className="dashboard-container">
      <div className="dashboard-main">
        <h1>Dashboard</h1>
        <h2>welcome user</h2>
        <div>
          <p>balance : ₹ 10000</p>
        </div>
        <div className="dashboard-button">
          <button onClick={handelDashboard}>transfer</button>
          <button onClick={handelHistory}>view history</button>
        </div>
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
