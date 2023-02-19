import React from 'react';
import './footer.css';
import {GrFacebook} from 'react-icons/gr';
import {GrInstagram} from 'react-icons/gr';
import {SlSocialTwitter} from 'react-icons/sl';
import {FcCopyright} from 'react-icons/fc';

const Footer = () => {
    return (
        <footer>
      <a className='footer_logo' href="#">A_H</a>
        <ul className="permalinks">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#testimonial">Testimonial</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer_socials">
            <a href="htttps://facebook.com"><GrFacebook/></a>
            <a href="htttps://instagram.com"><GrInstagram/></a>
            <a href="htttps://twitter.com"><SlSocialTwitter/></a>
        </div>
        <div className="footer_copyRight">
            <small> <FcCopyright className='copyRight_icon'/> No copy right</small>
        </div>
        </footer>
    );
};

export default Footer;