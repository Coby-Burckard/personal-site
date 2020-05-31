import React from 'react';
import Section from '../Section';
import EntryList from './EntryList';
import EducationEntryList from './EducationEntryList';
import SkillContainer from './SkillContainer';
import AboutPage from './AboutPage';
import ProjectsPage from './ProjectsPage';

export default () => {
  return (
    <Section id="resume">
      <div className="resume">
        <AboutPage />
        <ProjectsPage />
        <SkillContainer />
        <EducationEntryList />
        <EntryList />
      </div>
    </Section>
  );
};
