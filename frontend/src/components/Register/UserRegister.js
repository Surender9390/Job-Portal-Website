import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./UserRegister.css";

function UserRegister() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:8000/api/register/", form)
      .then(() => {
        alert("User registered successfully");
        navigate("/jobs");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="form-wrapper">
      <form className="form-box" onSubmit={handleSubmit}>
        <h2>User Register</h2>

        <input
          placeholder="Username"
          value={form.username}
          onChange={(e) =>
            setForm({ ...form, username: e.target.value })
          }
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default UserRegister;
