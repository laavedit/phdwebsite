// ProjectHighlights.jsx

import React from 'react';
import './ProjectHighlights.css';

const ProjectHighlights = () => {
    return (
        <div className="project-container">
            <div className="project-item">
                <h3>Community Forest Management</h3>
                <p>Implemented sustainable management practices in 5 community forests, benefiting 500+ families.</p>
            </div>
            <div className="project-item">
                <h3>Eco-Tourism Development</h3>
                <p>Developed eco-tourism initiatives in remote villages, generating income for local communities.</p>
            </div>
            <div className="project-item">
                <h3>Climate Resilience Program</h3>
                <p>Launched programs to build climate resilience, including water management and disaster preparedness.</p>
            </div>
            {/* Add more projects as needed */}
        </div>
    );
}

export default ProjectHighlights;
