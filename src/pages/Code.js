import React from 'react';

import RESTDB from '../keys';

import TileGrid from '../components/TileGrid';
import Copyright from '../elements/Copyright';

const Art = () => (
  <React.Fragment>
    <TileGrid id="art" dataSource="code" />
    <Copyright />
  </React.Fragment>
);

export default Art;
