import React from "react";
import "./styles/CloseSesion.css";
import { useNavigate } from "react-router-dom";

const CloseSesion = () => {
  const navigate = useNavigate();

  const handleCloseSesion = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="close__sesion">
      <h2 className="close__sesion-h2">Close Sesion</h2>
      <button className="close__sesion-btn" onClick={handleCloseSesion}>
        <i className="bx bx-x-circle"></i>
      </button>
    </div>
  );
};

export default CloseSesion;
