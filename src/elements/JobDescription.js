import React from 'react';

const JobDescription = props => (
  <ul>{props.description && props.description.map(item => <li>{item}</li>)}</ul>
);

export default JobDescription;
