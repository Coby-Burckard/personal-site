import React from 'react';

export default props => (
  <div className="skills__skill">
    <div>
      <p className="skills__skill__title">{props.skill}</p>
      <div className="skills__circle-container">
        {[1, 2, 3].map(item =>
          item === props.value ? (
            <div className="skills__circle--filled"></div>
          ) : (
            <div className="skills__circle"></div>
          )
        )}
      </div>
    </div>
  </div>
);
