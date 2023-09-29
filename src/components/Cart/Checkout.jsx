import React, { useState } from "react";
import "./Cart.css";
import { useNavigate } from "react-router";

function Checkout() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    cardNumber: "",
    expiration: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    navigate("/MessageButton");
    e.preventDefault();

    // You can handle the form submission logic here, e.g., send the data to an API
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Card Number:</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Expiration Date:</label>
          <input
            type="text"
            name="expiration"
            value={formData.expiration}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>CVV:</label>
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            required
          />
        </div>
        <button onClick={handleSubmit}>Submit Order</button>
      </form>
    </div>
  );
}

export default Checkout;
