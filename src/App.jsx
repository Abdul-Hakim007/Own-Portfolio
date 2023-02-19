import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/experience/Experience';
import Testimonial from './components/testimonial/Testimonial';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';


const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <Testimonial />
            <Contact />
            <Footer/>
        </>
    );
};

export default App;