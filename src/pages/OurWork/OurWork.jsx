import React, { useState, useEffect } from 'react';
import './OurWork.css';
import { our_work } from '../../assets/assets';
import Card from '../../components/Card/Card';
import ProjectDetails from '../../components/ProjectDetails/ProjectDetails';
import CTA from '../../components/CTA/CTA';

const OurWork = ({ category, setCategory }) => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  // Log the initial our_work array
  useEffect(() => {
    console.log('our_work:', our_work);
  }, []);

  const handleClick = (index) => {
    console.log(`Card clicked: ${index}`); // Debug: Log clicked index
    setSelectedProjectIndex(index === selectedProjectIndex ? null : index);
  };

  // Filter projects based on category
  const filteredWorks = category === "All" ? our_work : our_work.filter(item => item.our_work_name === category);
  
  // Log the category and filtered projects array
  useEffect(() => {
    console.log('Category:', category);
    console.log('filteredWorks:', filteredWorks);
  }, [category]);

  return (
    <div className="our-work">
      <h1>Our Work</h1>
      <p className="our-work-text">Explore our projects</p>

      <div className="our-work-content">
        {/* Project Cards */}
        <div className="our-work-list">
          {filteredWorks.length > 0 ? (
            filteredWorks.map((item, index) => (
              <Card
                key={index}
                item={item}
                handleClick={() => handleClick(index)}
                isActive={category === item.our_work_name}
                isClicked={selectedProjectIndex === index}
              />
            ))
          ) : (
            <p>No projects available.</p> // Fallback for empty list
          )}
        </div>

        {/* Project Details (if a project is selected) */}
        {selectedProjectIndex !== null && (
          <div className="our-work-details">
            <ProjectDetails project={filteredWorks[selectedProjectIndex]} />
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="our-work-cta">
        <CTA />
      </div>
    </div>
  );
};

export default OurWork;
