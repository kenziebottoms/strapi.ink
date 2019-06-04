import React from 'react';

import Script from '../elements/Script';

const CodePen = props => (
  <React.Fragment>
    <div
      className="codepen"
      data-height="265"
      data-theme-id="dark"
      data-default-tab="result"
      data-user="kenziebottoms"
      data-slug-hash={props.hash}
      style={{
        height: '265px',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid',
        margin: '1em 0',
        padding: '1em',
      }}
    >
      <span>
        See this Pen{' '}
        <a href={`https://codepen.io/kenziebottoms/pen/${props.hash}/`}>
          {props.title}
        </a>{' '}
        by Kenzie Bottoms (
        <a href="https://codepen.io/kenziebottoms">@kenziebottoms</a>) on{' '}
        <a href="https://codepen.io">CodePen</a>.
      </span>
    </div>
    <Script
      id={props.hash}
      async={true}
      src="https://static.codepen.io/assets/embed/ei.js"
    />
  </React.Fragment>
);

export default CodePen;
