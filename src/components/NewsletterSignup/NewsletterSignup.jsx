import React, { useState } from 'react';
import './NewsletterSignup.css';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your actual newsletter signup logic (e.g., API call)
    console.log(`Submitted: Name - ${name}, Email - ${email}`);
    // Clear form after submission
    setEmail('');
    setName('');
  };

  return (
    <div className="newsletter-signup">
      <h2 className="newsletter-signup__title">Subscribe to Our Newsletter</h2>
      <form onSubmit={handleSubmit} className="newsletter-signup__form">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="newsletter-signup__input"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="newsletter-signup__input"
          required
        />
        <button type="submit" className="newsletter-signup__button">Subscribe</button>
      </form>
    </div>
  );
}

export default NewsletterSignup;
