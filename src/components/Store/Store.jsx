import React, { useContext, useEffect, useState } from "react";
import "./Store.css";
import { useNavigate } from "react-router-dom";
import { Cartcontext } from "../../context/Context";

export default function Store() {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  const handleImageClick = () => {
    // Navigate to another page when the image is clicked
    navigate("/SingleProduct");
  };

  const handleSubmit = () => {
    // Navigate to s page when the submit button is clicked
    navigate("/SingleProduct");
  };

  useEffect(() => {
    async function Store() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const results = await response.json();
        setProduct(results);
      } catch (err) {
        console.error(err);
      }
    }
    Store();
  }, []);

  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);

  return (
    <div className="card-container">
      {product.map((item, i) => {
        item.quantity = 1;
        return (
          <div>
            <div className="card" key={i}>
              <img
                src={item.image}
                alt={item.title}
                onClick={handleImageClick}
              />
              <p>{item.title}</p>
              <h3> $ {item.price}</h3>
              <button onClick={handleSubmit}>View Product Details</button>
              <button onClick={() => dispatch({ type: "ADD", payload: item })}>
                add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
