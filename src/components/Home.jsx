import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const history = useNavigate();

  const handleSubmit = () => {
    // Navigate to another page when the submit button is clicked
    history("/store");
  };

  return (
    <div className="home-container">
      <h1 className="animate">Boutique Boulevard</h1>
      <h4>Upgrade your shopping experience</h4>
      <button onClick={handleSubmit}>Shop our Selection</button>
    </div>
  );
}
