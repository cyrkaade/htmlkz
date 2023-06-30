import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./App.css"; // Import the CSS file for styling

function Signup({ logIn }) {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/signup", {
        email,
        password,
      });

      if (response.data === "exist") {
        alert("User already exists");
      } else if (response.data === "notexist") {
        logIn();
        history("/home", { state: { id: email } });
      }
    } catch (error) {
      alert("Wrong details");
      console.log(error);
    }
  }

  return (
    <div className="signup-container">
      <h1 className="signup-heading">Аккаунт жасау</h1>

      <form className="signup-form" action="POST">
        <input
          type="email"
          className="signup-input"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          className="signup-input"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input type="submit" className="signup-button" value="Жасау" onClick={submit} />
      </form>

      <div className="signup-divider">
        <span className="signup-divider-text">Немесе</span>
      </div>

      <Link to="/" className="login-link">
        Кіру
      </Link>
    </div>
  );
}

export default Signup;
