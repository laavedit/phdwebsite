import React from 'react';
import Team from '../../components/Team/Team';
import CTA from '../../components/CTA/CTA';
import Map from '../../components/Map/Map';
import NewsletterSignup from '../../components/NewsletterSignup/NewsletterSignup';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us__content">
        <h1 className="about-us__title">About Us</h1>
        <div className="about-us__main">
          <p className="about-us__description">
            People for Himalayan Development (PHD) emerged from the Himalaya Niti Abhiyan (HNA), a collective aimed at promoting a sustainable development strategy in the Himalayan region. HNA focuses on empowering local communities to manage and conserve their environment while advocating for policies that protect biodiversity and support local livelihoods. They oppose large-scale projects like dams and industries that threaten the ecosystem and local economies. PHD, established in 2022, continues this work by advocating for equitable and sustainable development in areas such as community forests, climate resilience, tourism, waste management, and cultural preservation. Their approach emphasizes community empowerment and environmental stewardship to ensure a balanced and sustainable future for the Himalayan communities.
          </p>
          <div>
      <NewsletterSignup className="newsletter-section" />
      </div>
        </div>
        <div className="about-us__section">
          <Team />
        </div>
        <div className="about-us__section">
          <CTA />
        </div>
        <div className="about-us__map">
        <Map />
      </div>

      </div>
    </div>
  );
}

export default AboutUs;
