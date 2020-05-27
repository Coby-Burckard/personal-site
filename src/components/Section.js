import React from 'react';

export default props => {
  return (
    <div className="section" id={props.id}>
      {props.children}
    </div>
  );
};
