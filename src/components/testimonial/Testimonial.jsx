import React from 'react'
import './testimonial.css';
import Avatar1 from '../../assets/avatar1.jpg';
import Avatar2 from '../../assets/avatar2.jpg';
import Avatar3 from '../../assets/avatar3.jpg';
import Avatar4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules
import {Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonial_container" 
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={Avatar1} alt="Avatar one" />
          </div>
          <h5 className="client_name">Hena Boshlay</h5>
            <small className="client_review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis quae possimus ducimus ut, aut sed porro molestiae ipsa quod.
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={Avatar2} alt="Avatar one" />
          </div>
          <h5 className="client_name">Hena Boshlay</h5>
            <small className="client_review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis quae possimus ducimus ut, aut sed porro molestiae ipsa quod.
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={Avatar3} alt="Avatar one" />
          </div>
          <h5 className="client_name">Hena Boshlay</h5>
            <small className="client_review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis quae possimus ducimus ut, aut sed porro molestiae ipsa quod.
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={Avatar4} alt="Avatar one" />
          </div>
          <h5 className="client_name">Hena Boshlay</h5>
            <small className="client_review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis quae possimus ducimus ut, aut sed porro molestiae ipsa quod.
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonial
