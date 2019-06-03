import React from 'react';

const TechTree = props => (
  <div className="tech">
    {props.tech && props.tech.map(tech => <span className="tag">{tech}</span>)}
  </div>
);

export default TechTree;
