import { useState } from "react";
import axios from "axios";
import "./AdminRegister.css";
import { useNavigate } from "react-router-dom";

function AdminRegister() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username:"", password:"" });

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/api/register/admin", form)
      .then(() => navigate("/jobs"))
      .catch(err => console.log(err));
  };

  return (
    <form className="form-box admin" onSubmit={handleSubmit}>
      <h2>Admin Register</h2>
      <input placeholder="Username" onChange={e=>setForm({...form,username:e.target.value})} />
      <input type="password" placeholder="Password" onChange={e=>setForm({...form,password:e.target.value})} />
      <button>Register</button>
    </form>
  );
}

export default AdminRegister;
