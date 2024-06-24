import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import ImpactMetrics from '../../components/ImpactMetrics/ImpactMetrics';
// import ProjectHighlights from '../../components/ProjectHighlights/ProjectHighlights';
import Partners from '../../components/Partners/Partners';
import Blog from '../Blogs/Blog';
import OurWork from '../OurWork/OurWork';
import { blogPosts } from '../../assets/assets'; // Adjust the import path here

const Home = () => {
    const [category, setCategory] = useState('All');

    return (
        <div>
            <Header />
            <ImpactMetrics />
            <Blog blogPosts={blogPosts} />
            {/* <ProjectHighlights /> */}
            {/* <Partners /> */}
            <OurWork category={category} setCategory={setCategory} />
        </div>
    );
};

export default Home;
