import React from 'react';
import Section from '../Section';
import EntryList from './EntryList';
import EducationEntryList from './EducationEntryList';
import SkillContainer from './SkillContainer';

export default () => {
  return (
    <Section id="resume">
      <div className="resume">
        <SkillContainer />
        <EducationEntryList />
        <EntryList />
      </div>
    </Section>
  );
};
