import React from 'react';
import Testimonials from '../Review/Testimonials';
import AccordionDef from './Accordion';
import Header from './Header';
import Services from './Services';
import { Statistic } from './Statistics';
import { Team } from './Teams';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services home></Services>
            <AccordionDef></AccordionDef>
            <Testimonials home></Testimonials>
            <Statistic></Statistic>
            <Team></Team>
        </div>
    );
};

export default Home;