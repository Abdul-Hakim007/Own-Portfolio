import React from 'react';
import './about.css';
// import Me from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';
import Hakim from '../../assets/hakim.png'

const About = () => {
    return (
        <section id='about'>
            <h5>Get to know</h5>
            <h2>About Me</h2>

            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={Hakim} alt="About_Image" />
                    </div>
                </div>
                <div className="about_content">
                    <div className="about_cards">
                        <article className='about_card'>
                            <FaAward className='about_icon'/>
                            <h5>Experience</h5>
                            <small>6 month+ working</small>
                        </article>
                        <article className='about_card'>
                            <FiUsers className='about_icon'/>
                            <h5>Clients</h5>
                            <small>10+ Clients world wide</small>
                        </article>
                        <article className='about_card'>
                            <VscFolderLibrary className='about_icon'/>
                            <h5>Projects</h5>
                            <small>20+ Completed</small>
                        </article>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aut repudiandae tenetur at assumenda iste eius exercitationem architecto earum, iusto molestiae ea id, dolor saepe dicta et, minima quisquam ad.
                    </p>
                    <a className='btn btn-primary' href="#contact">Let's talk</a>
                </div>
            </div>
        </section>
    );
};

export default About;