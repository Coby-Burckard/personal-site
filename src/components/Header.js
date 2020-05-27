import React from 'react';
import { Link, animateScroll } from 'react-scroll';

export default props => {
  return (
    <div className="header">
      <Link
        className="header__link"
        activeClass="header__link--active"
        to="introduction"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        Introduction
      </Link>
      <a className="header__link" href="#education">
        Education
      </a>
    </div>
  );
};
