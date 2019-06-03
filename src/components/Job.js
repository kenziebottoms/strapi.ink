import React from 'react';

import TechTree from '../elements/TechTree';

const Job = props => (
  <article className={props.classes}>
    <h3>{props.company}</h3>
    <h4>{props.jobTitle}</h4>
    <p className="date">
      {props.startDate} — {props.endDate || 'present'}
    </p>
    <ul>
      {props.description && props.description.map(item => <li>{item}</li>)}
    </ul>
    <TechTree tech={props.tech} />
  </article>
);

export default Job;
