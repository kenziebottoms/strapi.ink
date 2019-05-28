import React from 'react';

import TileGrid from '../components/TileGrid';
import Copyright from '../elements/Copyright';

const Art = () => (
  <React.Fragment>
    <TileGrid id="art" dataSource="code" />
    <Copyright />
  </React.Fragment>
);

export default Art;
