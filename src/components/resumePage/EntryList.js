import React from 'react';
import Entry from './Entry';

export default () => {
  return (
    <div className="entry-list" id="experience">
      <h2 className="entry-list__title">Experience</h2>
      <Entry
        dates="2018-2020"
        title="Research and Development Engineer"
        company="General Mills"
        description="Led over $2.3 million dollars worth of cost management projects for the Betty Crocker portfolio of products.  Responsibilities include managing manufacturing start ups across the country, self teaching food science, partnering with vendors, and maintaining strict project schedules"
      />
      <Entry
        dates="2016-2017"
        title="Material Science and Medical Device Co-Op"
        company="Battelle Memorial Institute"
        description="Supported contract research on the development of superhydrophobic polymer coatings"
      />
      <Entry
        dates="2016"
        title="R&D Cereal Intern"
        company="General Mills"
        description="Expanded the processing capabilities and capacity for the production of Multi-Grain Cheerios"
      />
      <Entry
        dates="2015"
        title="R&D Baking Intern"
        company="General Mills"
        description="Explored international product expansion for Betty Crocker products"
      />
      <Entry
        dates="2014"
        title="Quality Intern"
        company="Continental Tires"
        description="Created new test methods and procedures to expand the capabilites of the quality lab"
      />
    </div>
  );
};
