import React from 'react';
import './ProjectDetails.css'; // Adjust CSS import as per your file structure

const ProjectDetails = ({ project }) => {
  if (!project) {
    return null; // Handle case where project is not defined
  }

  const isSustainableTourism = project.our_work_name === "Sustainable Tourism";

  return (
    <div className="project-details">
      <h2 className="project-title">{project.title}</h2>
      <p className="project-description">{project.description}</p>

      {/* Conditional rendering for PDF download link */}
      {isSustainableTourism && (
        <div className="pdf-download">
          <a href="/assets/pdfs/SustainableTourism.pdf" download>Download PDF</a>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
