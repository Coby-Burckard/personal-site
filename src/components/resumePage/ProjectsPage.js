import React from 'react';
import mini from './images/mini.PNG';
import codenames from './images/codenames.PNG';
import advent from './images/advent-of-code.PNG'
import eff from './images/efficient-me.PNG';

export default () => (
  <div className="projects" id="projects">
    <h2 className="entry-list__title projects__title">Side-Projects</h2>
    <div className="projects-container">
      <div className="card">
        <a className="project" href="https://www.cburckards-mini-projects.com/">
          <img className="projects__img" src={mini} alt="mini-projects" />
          <div className="projects__info-container">
            <h3 className="projects__project-title">Mini-Projects</h3>
            <p className="projects__project-description">
              A collection of small full stack and frontend projects. The
              frontend was made with React, while the backend utilizes Node, WS
              JS, and Express.
            </p>
          </div>
        </a>
      </div>
      <div className="card">
        <a className="project" href="http://not-codenames.herokuapp.com/">
          <img className="projects__img" src={codenames} alt="codenames" />
          <div className="projects__info-container">
            <h3 className="projects__project-title">Codenames</h3>
            <p className="projects__project-description">
              A multiplayer replica of the popular game. Codenames was developed
              with a React frontend with a Node + WS JS backend.
            </p>
          </div>
        </a>
      </div>
      <div className="card">
        <a className="project" href="https://aoc-2020-visualized.netlify.app/">
          <img className="projects__img" src={advent} alt="Advent of Code" />
          <div className="projects__info-container">
            <h3 className="projects__project-title">Advent of Code Visualized</h3>
            <p className="projects__project-description">
              A one day coding challenge from the popular Advent of Code. I took my
              solution and spun up a quick react app in the afternoon of day 11.
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
);
