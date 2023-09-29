import { useState } from "react";
export default function Authenticate({ token }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  console.log("Token: ", token);

  async function handleClick() {
    try {
      const response = await fetch("https://fakestoreapi.com/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      console.log("Authenticate Result: ", result);
      setSuccessMessage(result.message);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      {successMessage && <p>{successMessage}</p>}
      {/* <button onClick={handleClick}>Authenticate Token!</button> */}
      {error && <p>{error}</p>}
    </div>
  );
}
