import React from 'react';

export default () => (
  <div className="skill-key">
    <div className="skills__skill">
      <div>
        <div className="skill-key__title">
          <p className="skill-key__sub-title--left">Novice</p>
          <p classNAme="skill-key__sub-title--right">Intermediate</p>
        </div>
        <div className="skill-key__circle-container">
          {[1, 2, 3].map(item =>
            true ? (
              <div className="skills__circle--filled"></div>
            ) : (
              <div className="skills__circle"></div>
            )
          )}
        </div>
      </div>
    </div>
  </div>
);
