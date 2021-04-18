import React from 'react';
import Enroll from '../Enroll/Enroll';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Teachers from '../Teachers/Teachers'
import Welcome from '../Welcome/Welcome';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Welcome></Welcome>
            <Services></Services>
            <Features></Features>
            <Testimonial></Testimonial>
            <Teachers></Teachers>
            <Enroll></Enroll>
            <Footer></Footer>
        </div>
    );
};

export default Home;

