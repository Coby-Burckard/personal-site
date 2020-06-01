import React from 'react';
import SkillList from './SkillList';
import skillsContent from '../../content/skillsContent';
import SkillKey from './SkillKey';

export default () => {
  return (
    <div className="skill" id="skills">
      <div className="skill__title-container">
        <h2 className="entry-list__title">Skills</h2>
        <SkillKey />
      </div>
      {skillsContent.map(skills => {
        return <SkillList {...skills} />;
      })}
    </div>
  );
};
