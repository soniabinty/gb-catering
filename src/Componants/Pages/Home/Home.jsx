import React from 'react';
import Banner from './Banner';
import Event from './Event';
import AboutUs from './AboutUs';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Event></Event>
           <AboutUs></AboutUs>
        </div>
    );
};

export default Home;