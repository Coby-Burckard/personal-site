import React from 'react';
import Photo from './images/IMG_4145.jpg';

export default () => (
  <div className="about" id="about">
    <div className="about__contact-container">
      <div className="about__contact">
        <p className="about__contact__info">
          <span className="about__contact__info-title">Name: </span>Coby
          Burckard
        </p>
        <p className="about__contact__info">
          <span className="about__contact__info-title">Email: </span>
          coby.burckard@gmail.com
        </p>
        <p className="about__contact__info">
          <span className="about__contact__info-title">Phone: </span>
          614-678-3161
        </p>
      </div>
      <div className="about__about">
        I am an aspiring full stack engineer. In 2018, I graduated with a degree
        in chemical engineering and accepted a job as a R&D food engineer. Since
        then, I have been teaching myself programming on the nights and
        weekends.
      </div>
    </div>
    <img classname="about__photo" src={Photo} alt="profile" />
  </div>
);
