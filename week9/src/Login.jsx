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

     // response.status === 200 대신에
if (response.status >= 200 && response.status < 300) {

  

        // Store username in local storage
        localStorage.setItem("username", "김준하");


  // 토큰과 id를 로컬 스토리지에 저장
  localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVtY3dlYiIsInVzZXJuYW1lIjoiVU1DIOybuSDtjIzsnbTtjIUiLCJpYXQiOjE3MDExMDcyMzksImV4cCI6MTcwMTEwODEzOSwiaXNzIjoiVU1DIFdlYiBXQiJ9.Tv-rXs9h1ojPT_0Brce_f8fBBEcN2gW4qTnFJJw3_BM");
  localStorage.setItem("id", id);
  setLoggedIn(true);
  alert("로그인 성공!");
} else {
  alert("유효하지 않은 사용자 이름 또는 비밀번호입니다. 다시 시도해주세요.");
}
    } catch (error) {
      console.error("An error occurred while logging in:", error);
      alert("An error occurred while logging in. Please try again.");
    }
  };
  const usernames = localStorage.getItem("username");
  return (
    <div className="App">
      {loggedIn ? (
        <div>
          <h1>Welcome, {usernames}!</h1>
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
