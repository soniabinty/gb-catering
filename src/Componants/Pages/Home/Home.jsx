import React from 'react';
import Banner from './Banner';
import Event from './Event';
import AboutUs from './AboutUs';
import Work from './Work';
import NeedHelp from './NeedHelp';
import LetsTalk from './LetsTalk';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Event></Event>
           <AboutUs></AboutUs>
           <Work></Work>
           <NeedHelp></NeedHelp>
           <LetsTalk></LetsTalk>
        </div>
    );
};

export default Home;