import React from 'react';
import './contact.css';
import {MdOutlineMail} from 'react-icons/md';
import {BsMessenger} from 'react-icons/bs';
import {ImWhatsapp} from 'react-icons/im';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        e.target.reset();
    
        emailjs.sendForm('service_u7vur9a', 'template_hj53n2p', form.current, 'J5vWEYwG2uLcX4c4_')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <MdOutlineMail className='contact_option-icon'/>
                        <h4>Email</h4>
                        <h5 className='email_control'>abdulhakimjoydebpur@gmail.com</h5>
                        <a href="mailto:dummy@gmail.com" target='_blank'>Send a message</a>
                    </article>
                    <article className="contact_option">
                        <BsMessenger className='contact_option-icon'/>
                        <h4>Messenger</h4>
                        <h5>Abdul Hakim</h5>
                        <a href="https://m.me/flair07" target='_blank'>Send a message</a>
                    </article>
                    <article className="contact_option">
                        <ImWhatsapp className='contact_option-icon'/>
                        <h4>WhatsApp</h4>
                        <h5>+8801721963357</h5>
                        <a href="https://api.whatsapp.com/send?phone=+8801721963357" target='_blank'>Send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your full name' required />
                    <input type="email" name='email' placeholder='Enter your email' required />
                    <textarea name="message" rows="7" placeholder='Your message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;