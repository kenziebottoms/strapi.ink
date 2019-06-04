import React from 'react';

import '../styles/elements/DateTag.scss';

function formatDate(epochString) {
  let date = new Date(epochString * 1000).toString();
  let [_, month, dayOfMonth, year] = date.split(' ');
  return `${month} ${dayOfMonth}, ${year}`;
}

const DateTag = props => <p className="date">{formatDate(props.date)}</p>;

export default DateTag;
