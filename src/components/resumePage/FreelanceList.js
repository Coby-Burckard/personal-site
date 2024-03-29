import React from "react"
import Entry from "./Entry"

export default () => {
  return (
    <div className="entry-list freelance-list" id="freelance">
      <h2 className="entry-list__title">Development Experience</h2>
      <Entry
        dates="2021-2022"
        title="Phobio"
        link="https://oneassembly.com"
        company="Software Engineer II"
        description="Co-Lead developer for a $30MM/year used device auction platform.  My responsibilities include everything from UI/UX design to backend API development and everything in between."
      />
      <Entry
        dates="2020-2021"
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
        title="Lucidian Online"
        link="https://www.playlucidian.com/"
        company="Freelancer"
        description="Constructed a series of board game pages in CSS, JS, and HTML for a virtual implementation of the board game, Lucidian. Work included detailed design implementation, custom SVG animations, and ingtegrating the game functionality."
      />
      <Entry
        dates="2020"
        title="whysellwiththomas.com"
        link="https://whysellwiththomas.com/"
        company="Freelancer"
        description="Translated and implemented designs for a real estate marketing site.  Responsive designs, customized video embedding, and hosting were some of the core responsibilities for this project"
      />
    </div>
  )
}
