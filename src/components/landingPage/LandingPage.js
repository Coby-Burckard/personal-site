import React from 'react';
import Section from '../Section';
import { Link } from 'react-scroll';

export default () => {
  return (
    <Section id="home">
      <div className="half-section-left background-light-green"></div>
      <div className="half-section-right white"></div>
      <div className="landing-page__container">
        <div className="landing-page">
          <h1 className="landing-page__title">Coby Burckard</h1>
          <h2 className="landing-page__sub-title">
            I'm a <span>full stack developer</span>
          </h2>
        </div>
        <div className="landing-page__arrow-container background-light-green">
          <Link
            className="landing-page__arrow"
            to="introduction"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            ↓
          </Link>
        </div>
      </div>
    </Section>
  );
};
