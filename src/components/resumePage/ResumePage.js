import React from 'react';
import Section from '../Section';
import EntryList from './EntryList';
import EducationEntryList from './EducationEntryList';
import SkillContainer from './SkillContainer';
import AboutPage from './AboutPage';

export default () => {
  return (
    <Section id="resume">
      <div className="resume">
        <AboutPage />
        <SkillContainer />
        <EducationEntryList />
        <EntryList />
      </div>
    </Section>
  );
};
