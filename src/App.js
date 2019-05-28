import React, { Fragment } from 'react';

import Sidebar from './components/Sidebar';
import Content from './components/Content';

import './styles/App.scss';

function App() {
  return (
    <Fragment>
      <Sidebar />
      <Content />
    </Fragment>
  );
}

export default App;
