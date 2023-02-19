import React from 'react';
import CV from '../../assets/cv.pdf'

const Cv = () => {
    return (
        <div className='cta'>
            <a href={CV} download className="btn">Dawnload CV</a>
            <a href="#contact" style={{marginLeft: 20}} className="btn btn-primary">Let's talk</a>
        </div>
    );
};

export default Cv;