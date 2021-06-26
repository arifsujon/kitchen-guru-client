import React from 'react';
import Navbar from '../Navbar/Navbar';
import TopBanner from '../TopBanner/TopBanner';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';


const Home = () => {
    
    return (
           
        <div>
            <Navbar></Navbar>
            <TopBanner />
            <Blogs />
            <Contact />
            
            <Footer />
            
        </div>
           
    );
};

export default Home;