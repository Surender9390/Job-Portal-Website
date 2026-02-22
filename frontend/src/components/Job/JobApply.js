import React, { useState } from "react";
import axios from "../../api";
import "./JobApply.css";

const JobApply = ({ jobId }) => {
  const [form, setForm] = useState({
    fullname: "",
    graduation: "",
    passed_out_year: "",
    phone: "",
    email: "",
    collage_name: "",
    fresher_experience: "",
    resume: null,
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    // ✅ attach job ID
    formData.append("job", jobId);

    Object.keys(form).forEach((key) => {
      formData.append(key, form[key]);
    });

    axios
      .post("http://127.0.0.1:8000/api/apply/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then(() => {
        alert("Applied successfully!");
        setForm({
          fullname: "",
          graduation: "",
          passed_out_year: "",
          phone: "",
          email: "",
          collage_name: "",
          fresher_experience: "",
          resume: null,
          image: null,
        });
      })
      .catch((err) => {
        console.error(err.response?.data || err.message);
        alert("Failed to apply");
      });
  };

  return (
    <div className="jobapply-container">
      <h3>Apply for this Job</h3>
      <form onSubmit={handleSubmit}>
        <input name="fullname" placeholder="Full Name" onChange={handleChange} required />
        <input name="graduation" placeholder="Graduation" onChange={handleChange} />
        <input name="passed_out_year" placeholder="Passed Out Year" onChange={handleChange} />
        <input name="phone" placeholder="Phone" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input name="collage_name" placeholder="College Name" onChange={handleChange} />
        <input name="fresher_experience" placeholder="Fresher / Experience" onChange={handleChange} />

        <label>Resume</label>
        <input type="file" name="resume" onChange={handleChange} required />

        <label>Image</label>
        <input type="file" name="image" onChange={handleChange} required />

        <button type="submit">Apply</button>
      </form>
    </div>
  );
};

export default JobApply;
