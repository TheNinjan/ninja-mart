import React from "react";
import { useNavigate } from "react-router-dom";
import { BsBagCheckFill } from "react-icons/bs";
import "./Success.scss";

const Success = () => {
  const navigate = useNavigate();
  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order !</h2>
        <p className="email-msg">check your inbox for your order receipt.</p>
        <p className="description">
          If you have any questions, please email{" "}
          <a className="email" href="mailto:theninjanofficial@gmail.com">
            theninjanofficial@gmail.com
          </a>
        </p>
        <button
          type="button"
          width="300px"
          className="btn"
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Success;
