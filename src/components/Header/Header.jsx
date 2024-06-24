import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import { Typewriter } from 'react-simple-typewriter';
import './Header.css';
import { assets } from '../../assets/assets';

const Header = () => {
  const navigate = useNavigate();

  const handleKnowMoreClick = () => {
    navigate('/about');
  };

  return (
    <Parallax bgImage={assets.header_img4} strength={300}>
      <div className='header'>
        <div className="header-contents">
          <h2>
            <Typewriter
              words={['Livelihood Through Conservation', 'Conservation Through Livelihoods']}
              loop={false}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          {window.innerWidth > 750 && (
            <p>Any changes we envisage is possible with the inclusion of the community, be it the forest, environment, health, sustainable tourism and above all quality of life.</p>
          )}
          <button onClick={handleKnowMoreClick}>Know More</button>
        </div>
      </div>
    </Parallax>
  );
};

export default Header;
