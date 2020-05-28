import React from 'react';
import { Link } from 'react-scroll';

export default props => {
  return (
    <div className="header">
      <a
        className="header__link"
        href="https://github.com/Coby-Burckard/personal-site"
      >
        GitHub
      </a>
      <div className="header__navlist">
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
    </div>
  );
};
