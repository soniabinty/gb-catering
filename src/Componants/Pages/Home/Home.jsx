import React from 'react';
import Banner from './Banner';
import Event from './Event';
import AboutUs from './AboutUs';
import Work from './Work';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Event></Event>
           <AboutUs></AboutUs>
           <Work></Work>
        </div>
    );
};

export default Home;