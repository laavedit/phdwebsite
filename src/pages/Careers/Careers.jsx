import React from 'react';
import './Careers.css'; // Import your CSS file for styling

const Careers = () => {
  // Sample job data (replace with actual data from your backend or state management)
  const jobs = [
    {
      id: 1,
      title: "Research Intern",
      location: "Kullu, H.P.",
      department: "Humanities and Social Sciences",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero sit amet justo lacinia, id scelerisque magna porttitor.",
      qualifications: "Pursuing a Bachelor’s degree in Humanities or Social Sciences. Strong research and analytical skills."
    },
    {
      id: 2,
      title: "Marketing Intern",
      location: "Kullu, H.P.",
      department: "Marketing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero sit amet justo lacinia, id scelerisque magna porttitor.",
      qualifications: "Pursuing a Bachelor’s degree in Marketing or related field. Strong communication and interpersonal skills."
    }
    // Add more job objects as needed
  ];

  return (
    <div className="careers-page">
    <div class="careers-page__content">
      <header>
        <h1>Careers</h1>
        <p>Explore opportunities to join our team.</p>
      </header>

      <section className="job-listings">
        <h2>Current Job Openings</h2>
        {jobs.map(job => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p>{job.location}</p>
            <p>{job.department}</p>
            <p>{job.description}</p>
            <p><strong>Qualifications:</strong> {job.qualifications}</p>
            <a href="#">Apply Now</a>
          </div>
        ))}
      </section>

      {/* <section className="company-culture">
        <h2>Our Company Culture</h2>
        <p>Learn about our values and what makes us a great place to work.</p>
      </section> */}

      {/* <section className="employee-testimonials">
        <h2>Employee Testimonials</h2>
        <div className="testimonial">
          <blockquote>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero sit amet justo lacinia, id scelerisque magna porttitor."
          </blockquote>
          <cite>- John Doe, Software Engineer</cite>
        </div>
      </section> */}
    </div>
      <footer>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </nav>
        <div className="social-media">
          <a href="https://twitter.com">Twitter</a>
          <a href="https://linkedin.com">LinkedIn</a>
          <a href="https://facebook.com">Facebook</a>
        </div>
      </footer>
    </div>
  );
};

export default Careers;
