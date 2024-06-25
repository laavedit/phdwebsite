import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        <Router basename="/phdwebsite">
          <Navbar setShowLogin={setShowLogin} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/careers' element={<Careers />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/work' element={<OurWork category={category} setCategory={setCategory} />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
};

export default App;
