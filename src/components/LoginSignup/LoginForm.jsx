import React, { useState } from "react";

export default function Login(props) {
  // useState Hook captures the values of what users put on our form.
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  // handleSubmit captures when user submits a form
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(username);

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        body: JSON.stringify({
          username: "mor_2314",
          password: "83r5^_",
        }),
      });
      const result = await response.json();
      console.log("Signup Result: ", result);
      setToken(result.token);
      setSuccessMessage(result.message);
      setUsername("");
      setPassword("");
      return result;
    } catch (err) {
      setError(error.message);
    }
  }

  return (
    <div className="form-container">
      <h2>Welcome Back</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <form className="login-container" onSubmit={handleSubmit}>
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

        {/* Login button */}
        <button>Log In</button>
      </form>
      {/* Registration button */}
      <button
        className="link-Button"
        onClick={() => props.onFormSwitch("SignUp")}
      >
        Don't have an account? Sing up
      </button>
    </div>
  );
}
