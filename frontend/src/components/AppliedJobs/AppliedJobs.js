import React, { useEffect, useState } from "react";
import api from "../../api";
import "./AppliedJobs.css";

function AppliedJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    api.get("apply/", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="applied-container">
      <h2>Your Applied Jobs</h2>

      {jobs.length === 0 && <p>No applications yet.</p>}

      {jobs.map((job) => (
        <div className="applied-card" key={job.id}>
          <h3>{job.fullname}</h3>

          <p><strong>Email:</strong> {job.email}</p>
          <p><strong>Phone:</strong> {job.phone}</p>
          <p><strong>Graduation:</strong> {job.graduation}</p>
          <p><strong>Passed Out Year:</strong> {job.passed_out_year}</p>
          <p><strong>College:</strong> {job.collage_name}</p>
          <p><strong>Experience:</strong> {job.fresher_experience}</p>

          {job.resume && (
            <p>
              <strong>Resume:</strong>{" "}
              <a href={job.resume} target="_blank" rel="noreferrer">
                View
              </a>
            </p>
          )}

          {job.image && (
            <img
              src={job.image}
              alt="profile"
              className="applied-image"
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default AppliedJobs;
