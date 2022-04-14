import React from "react"
import { Link } from "react-scroll"

export default (props) => {
  return (
    <div className="header">
      <a className="header__link" href="https://github.com/Coby-Burckard/">
        GitHub
      </a>
      <div className="header__navlist">
        <Link
          className="header__link"
          activeClass="header__link--active"
          to="about"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
        >
          About
        </Link>
        <Link
          className="header__link"
          activeClass="header__link--active"
          to="freelance"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
        >
          Experience
        </Link>
        <Link
          className="header__link"
          activeClass="header__link--active"
          to="projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Projects
        </Link>
        <Link
          className="header__link"
          activeClass="header__link--active"
          to="skills"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Skills
        </Link>
        <Link
          className="header__link"
          activeClass="header__link--active"
          to="education"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Education
        </Link>
        <Link
          className="header__link"
          activeClass="header__link--active"
          to="experience"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Chemical Engineering
        </Link>
      </div>
    </div>
  )
}
