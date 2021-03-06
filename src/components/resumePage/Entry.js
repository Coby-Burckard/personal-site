import React from 'react';

export default props => (
  <div className="entry">
    <div className="entry__dates-container">
      <h3 className="entry__dates">{props.dates}</h3>
    </div>
    <div className="entry__info-container">
      {props.link ? <a href={props.link}><h3 className="entry__title entry__link">{props.title}</h3></a> : <h3 className="entry__title">{props.title}</h3>}
      <p className="entry__university">{props.company}</p>
      <p className="entry__description">{props.description}</p>
    </div>
  </div>
);
