import React, { useState, useEffect } from "react";
import axios from "../../api";
import "./PostJob.css";
import { useNavigate } from "react-router-dom";

function PostJob() {
  const navigate = useNavigate();
  const token = localStorage.getItem("access");
  const role = localStorage.getItem("role");

  const [form, setForm] = useState({
    title: "",
    company_name: "",
    location: "",
    job_type: "FullTime",
    salary: "",
    description: "",
    logo: null,
  });

  useEffect(() => {
    if (!token || role !== "admin") {
      alert("Admin login required");
      navigate("/login");
    }
  }, [token, role, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setForm({ ...form, logo: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(form).forEach((key) => {
      formData.append(key, form[key]);
    });

    try {
      await axios.post(
        "http://127.0.0.1:8000/api/jobs/create/",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Job posted successfully ✅");
      navigate("/jobs");
    } catch (err) {
      console.error(err.response?.data);
      alert("Failed to post job ❌");
    }
  };

  return (
    <div className="postjob-container">
      <h2>Post Job</h2>

      <form onSubmit={handleSubmit} className="postjob-form">
        <input name="title" placeholder="Job Title" onChange={handleChange} required />
        <input name="company_name" placeholder="Company Name" onChange={handleChange} required />
        <input name="location" placeholder="Location" onChange={handleChange} required />

        <select name="job_type" onChange={handleChange}>
          <option value="FullTime">Full Time</option>
          <option value="Hybrid">Hybrid</option>
          <option value="WFH">Work From Home</option>
        </select>

        <input name="salary" placeholder="Salary" onChange={handleChange} />
        <textarea name="description" placeholder="Description" onChange={handleChange} required />

        <input type="file" onChange={handleFileChange} required />

        <button type="submit">Post Job</button>
      </form>
    </div>
  );
}

export default PostJob;
