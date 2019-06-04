import React from 'react';

const JobDescription = props => (
  <ul>
    {props.description &&
      props.description.map((item, i) => <li key={i}>{item}</li>)}
  </ul>
);

export default JobDescription;
