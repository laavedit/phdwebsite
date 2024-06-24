// JobListing.jsx
import React from 'react';

const JobListing = ({ job }) => {
  return (
    <div className="job-listing">
      <h3>{job.title}</h3>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Responsibilities:</strong></p>
      <ul>
        {job.responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
      <p><strong>Qualifications:</strong></p>
      <ul>
        {job.qualifications.map((qual, index) => (
          <li key={index}>{qual}</li>
        ))}
      </ul>
      <button className="apply-btn">Apply Now</button>
    </div>
  );
};

export default JobListing;
