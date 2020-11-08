import React from 'react';
import Entry from './Entry';

export default () => {
  return (
    <div className="entry-list freelance-list" id="freelance">
      <h2 className="entry-list__title">Freelance Work</h2>
      <Entry
        dates="Current"
        title="remind.com"
        link="https://www.remind.com/"
        company="Contractor"
        description="Working on a series of projects for Remind's marketing and core apps. Including a design overhall to their skilljar site.  I have completed work in Gatsby, React, and other frameworks."
      />
      <Entry
        dates="2020"
        title="docketscience.com"
        link="https://docketscience.com/"
        company="Freelancer"
        description="Implemented design changes to Docket Science's marketing site.  Several front end libraries and tools were used throughout this process including React, SCSS/SAS, Flow, and React-Router" 
      />
      <Entry
        dates="2020"
        title="whysellwiththomas.com"
        link="https://whysellwiththomas.com/"
        company="Freelancer"
        description="Translated and implemented designs for a real estate marketing site.  Responsive designs, customized video embedding, and hosting were some of the core responsibilities for this project" 
      />
    </div>
  );
};
