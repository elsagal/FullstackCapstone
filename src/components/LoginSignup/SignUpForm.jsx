import React, { useState } from "react";

export default function SignUp(props) {
  // useState Hook captures the values of what users put on our form
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  // handleSubmit captures when user submits a form
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(username);

    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        body: JSON.stringify({
          username: "mor_2314",
          password: "83r5^_",
        }),
      });
      const result = await response.json();
      console.log(result);
      return result;
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="form-container">
      <div className="backdrop-container"></div>
      <h2>Create Account</h2>

      <form className="singUp-form" onSubmit={handleSubmit}>
        {/* Name  */}
        <label htmlFor="name"> Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="name"
          placeholder="Your Name"
          id="name"
        />

        {/* Username  */}
        <label htmlFor="username"> Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="username"
          placeholder="Type username..."
          id="username"
        />

        {/* Password  */}
        <label htmlFor="password"> Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="*********"
          id="password"
        />

        {/* Submit button */}
        <button>Submit</button>
      </form>
      {/* Login button */}
      <button
        className="link-Button"
        onClick={() => props.onFormSwitch("login")}
      >
        Back to Login
      </button>
    </div>
  );
}
