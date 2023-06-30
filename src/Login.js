import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./App.css"; // Import the CSS file for styling

function Login({ logIn }) {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/", {
        email,
        password,
      });

      if (response.data === "exist") {
        logIn();
        history("/home", { state: { id: email } });
      } else if (response.data === "notexist") {
        alert("User has not signed up");
      }
    } catch (error) {
      alert("Wrong details");
      console.log(error);
    }
  }

  return (
    <div className="login-container">
      <h1 className="login-heading">Кіру</h1>

      <form className="login-form" action="POST">
        <input
          type="email"
          className="login-input"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          className="login-input"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input type="submit" onClick={submit} className="login-button" value="Кіру" />
      </form>

      <div className="login-divider">
        <span className="login-divider-text">Немесе</span>
      </div>

      <Link to="/signup" className="signup-link">
        Аккаунт жасау
      </Link>
    </div>
  );
}

export default Login;
