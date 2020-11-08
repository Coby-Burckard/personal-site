import React from 'react';
import Section from '../Section';
import EntryList from './EntryList';
import EducationEntryList from './EducationEntryList';
import SkillContainer from './SkillContainer';
import AboutPage from './AboutPage';
import ProjectsPage from './ProjectsPage';
import FreelanceList from './FreelanceList';

export default () => {
  return (
    <Section id="resume">
      <div className="resume">
        <AboutPage />
        <FreelanceList />
        <ProjectsPage />
        <SkillContainer />
        <EducationEntryList />
        <EntryList />
      </div>
    </Section>
  );
};
