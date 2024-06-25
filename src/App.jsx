import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Careers from './pages/Careers/Careers';
import Blog from './pages/Blogs/Blog';
import OurWork from './pages/OurWork/OurWork';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [category, setCategory] = useState('All');

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/phdwebsite/' element={<Home />} />
          <Route path='/phdwebsite/about' element={<AboutUs />} />
          <Route path='/phdwebsite/careers' element={<Careers />} />
          <Route path='/phdwebsite/blog' element={<Blog />} />
          <Route path='/phdwebsite/work' element={<OurWork category={category} setCategory={setCategory} />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
