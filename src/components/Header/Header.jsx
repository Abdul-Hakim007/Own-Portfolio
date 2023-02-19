import React from 'react';
import Cv from './Cv';
import './header.css';
// import Me from '../../assets/me.png';
import header from '../../assets/header.png';
import HeaderSocial from './HeaderSocial';

const Header = () => {
    return (
    <header>
        <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Abdul Hakim</h1>
        <h5 className="text-light">Full Stack Developer </h5>
        <Cv/>
        <HeaderSocial/>
        <div className="me">
            <img className="image_style" src={header} alt="me" />
        </div>
        <a href='#contact' className='scroll_down'>Scroll down</a>
        </div>
    </header>
    );
};

export default Header;