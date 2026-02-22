import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./UserLogin.css";

function UserLogin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:8000/api/login/", form)
      .then((res) => {
        localStorage.setItem("access", res.data.access);
        localStorage.setItem("refresh", res.data.refresh);
        localStorage.setItem("role", "user"); // 🔑 KEY LINE

        navigate("/jobs");
      })
      .catch((err) => console.error(err.response.data));
  };

  return (
    <div className="login-container">
      <h2>User Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" onChange={handleChange} /><br></br>
        <input type="password" name="password" placeholder="Password" onChange={handleChange} /><br></br>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default UserLogin;
