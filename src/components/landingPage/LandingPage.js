import React from 'react';
import Section from '../Section';

export default () => {
  return (
    <Section>
      <div className="half-section-left background-light-green"></div>
      <div className="half-section-right white"></div>
      <div className="landing-page">
        <h1 className="landing-page__title">Coby Burckard</h1>
        <h2 className="landing-page__sub-title">
          I'm a <span>full stack developer</span>
        </h2>
      </div>
      <div className="landing-page__arrow-container background-light-green">
        <a className="landing-page__arrow" href="/">
          ↓
        </a>
      </div>
    </Section>
  );
};
