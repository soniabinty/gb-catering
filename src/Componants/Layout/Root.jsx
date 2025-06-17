import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from '../Shared/ScrollToTop';

const Root = () => {
useEffect(() => {
    AOS.init({
      offset: 50,       // start the animation 200px before the element is in view
      delay: 100,        // delay before animation starts
      duration: 2000,     // duration of animation
      easing: 'ease-in-out', // easing function
      mirror: false,     // disable animation when scrolling up
      once: true,        // animate only once
    });
  }, []);
    return (
        <div>
            <Navbar></Navbar>
             <ScrollToTop />
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;