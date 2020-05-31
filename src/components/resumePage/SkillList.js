import React from 'react';
import Skill from './Skill';

export default props => {
  console.log('here');
  return (
    <>
      <h3 className="skill__list__title">{props.type}</h3>
      <div className="skill__list">
        {props.skills.map(skill => (
          <Skill {...skill} />
        ))}
      </div>
    </>
  );
};
