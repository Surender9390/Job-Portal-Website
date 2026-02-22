import React, { useEffect, useState } from "react";
import axios from "../../api";
import JobApply from "../Job/JobApply";
import "./Jobs.css";
import { useNavigate } from "react-router-dom";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [editJobId, setEditJobId] = useState(null);
  const [editData, setEditData] = useState({
    title: "",
    company_name: "",
    location: "",
    job_type: "",
    salary: "",
    description: "",
  });

  const navigate = useNavigate();

  const token = localStorage.getItem("access");
  const role = localStorage.getItem("role");

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = () => {
    axios
      .get("http://127.0.0.1:8000/api/jobs/")
      .then((res) => setJobs(res.data))
      .catch((err) => console.error(err));
  };

  // ================= USER APPLY =================
  const handleApplyClick = (jobId) => {
    if (!token) {
      alert("Please login to apply for a job");
      navigate("/login");
      return;
    }

    if (role !== "user") {
      alert("Admins are not allowed to apply for jobs");
      return;
    }

    setSelectedJob(jobId);
  };

  // ================= ADMIN DELETE =================
  const handleDelete = async (jobId) => {
    if (!window.confirm("Are you sure you want to delete this job?")) return;

    try {
      await axios.delete(
        `http://127.0.0.1:8000/api/jobs/delete/${jobId}/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setJobs(jobs.filter((job) => job.id !== jobId));
      alert("Job deleted successfully");
    } catch (error) {
      console.error(error.response?.data);
      alert("Delete failed");
    }
  };

  // ================= ADMIN EDIT =================
  const openEdit = (job) => {
    setEditJobId(job.id);
    setEditData({
      title: job.title,
      company_name: job.company_name,
      location: job.location,
      job_type: job.job_type,
      salary: job.salary,
      description: job.description,
    });
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await axios.patch(
        `http://127.0.0.1:8000/api/jobs/update/${editJobId}/`,
        editData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      fetchJobs();
      setEditJobId(null);
      alert("Job updated successfully");
    } catch (error) {
      console.error(error.response?.data);
      alert("Edit failed");
    }
  };

  return (
    <div className="jobs-container">
      <h2>Available Jobs</h2>

      {jobs.length === 0 && <p>No jobs posted yet.</p>}

      <div className="jobs-list">
        {jobs.map((job) => (
          <div className="job-card" key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.company_name} - {job.location}</p>
            <p>Type: {job.job_type} | Salary: {job.salary}</p>
            <p>{job.description}</p>

            {/* USER APPLY */}
            {role === "user" && (
              <button
                className="apply-btn"
                onClick={() => handleApplyClick(job.id)}
              >
                Apply
              </button>
            )}

            {/* ADMIN CONTROLS */}
            {role === "admin" && (
              <div className="admin-btns">
                <button
                  className="edit-btn"
                  onClick={() => openEdit(job)}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(job.id)}
                >
                  Delete
                </button>
              </div>
            )}

            {selectedJob === job.id && role === "user" && (
              <JobApply jobId={job.id} />
            )}
          </div>
        ))}
      </div>

      {/* EDIT FORM */}
      {editJobId && role === "admin" && (
        <form className="edit-job-form" onSubmit={handleUpdate}>
          <h3>Edit Job</h3>

          <input name="title" value={editData.title} onChange={handleEditChange} />
          <input name="company_name" value={editData.company_name} onChange={handleEditChange} />
          <input name="location" value={editData.location} onChange={handleEditChange} />
          <input name="job_type" value={editData.job_type} onChange={handleEditChange} />
          <input name="salary" value={editData.salary} onChange={handleEditChange} />
          <textarea name="description" value={editData.description} onChange={handleEditChange} />

          <button type="submit">Update</button>
          <button type="button" onClick={() => setEditJobId(null)}>
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default Jobs;
