import React from 'react';

import moment from 'moment';

import '../styles/elements/DateTag.scss';

function formatDate(epochString) {
  let date = new Date(epochString * 1000);
  return moment(date).format('MMMM D, YYYY');
}

const DateTag = props => <p className="date">{formatDate(props.date)}</p>;

export default DateTag;
