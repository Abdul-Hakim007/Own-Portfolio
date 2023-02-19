import React from 'react';
import './experience.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
            <div className="container experience_container">
                <div className="experience_forntend">
                    <h3>Frontend Development</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsFillPatchCheckFill className='icon' />
                           <div>
                           <h4>HTML</h4>
                            <small className='text-light'>Experienced</small>
                           </div>
                        </article>
                        <article className="experience_details">
                            <BsFillPatchCheckFill className='icon' />
                            <div>
                            <h4>CSS</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsFillPatchCheckFill className='icon' />
                            <div>
                            <h4>JavaScript</h4>
                            <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsFillPatchCheckFill className='icon'  />
                            <div>
                            <h4>Bootstrap</h4>
                            <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsFillPatchCheckFill className='icon'  />
                            <div>
                            <h4>Tailwind</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsFillPatchCheckFill className='icon'  />
                            <div>
                            <h4>React</h4>
                            <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience_backtend">
                    <h3>Backend Development</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsFillPatchCheckFill  className='icon' />
                            <div>
                            <h4>Node Js</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsFillPatchCheckFill className='icon'  />
                            <div>
                            <h4>MongoDB</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsFillPatchCheckFill className='icon' />
                            <div>
                            <h4>Firebase</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;