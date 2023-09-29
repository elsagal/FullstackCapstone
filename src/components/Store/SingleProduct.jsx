import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Store.css";

export default function SingleProduct({ itemId }) {
  const [singleProduct, setSingleProduct] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = () => {
    // Navigate to s page when the submit button is clicked
    navigate("/store");
  };

  const handleImageClick = () => {
    // Navigate to another page when the image is clicked
    navigate("/store");
  };

  useEffect(() => {
    async function SingleProduct() {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/1`);
        const results = await response.json();
        setSingleProduct(results);
      } catch (err) {
        console.error(err);
      }
    }
    SingleProduct();
  }, [itemId]);

  return (
    <div className="singlecard-container">
      <div className="card">
        <img
          src={singleProduct.image}
          alt={singleProduct.title}
          onClick={handleImageClick}
        />
        <div className="text">
          <h1>{singleProduct.title}</h1>
          <h3>{singleProduct.description}</h3>
          <h4> $ {singleProduct.price}</h4>
          <button onClick={handleSubmit}>back to store</button>
        </div>
      </div>
    </div>
  );
}
