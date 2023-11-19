import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/user/login", {
        id,
        pw,
      });

      if (response.status === 200) {
        setLoggedIn(true);
        alert("Login successful!");
      } else {
        alert("Invalid user name or password. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred while logging in:", error);
      alert("An error occurred while logging in. Please try again.");
    }
  };

  return (
    <div className="App">
      {loggedIn ? (
        <div>
          <h1>Welcome, {id}!</h1>
          <p>You are now logged in.</p>
        </div>
      ) : (
        <div>
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <label>
              ID:
              <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                required
              />
            </label>
            <br />
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;
