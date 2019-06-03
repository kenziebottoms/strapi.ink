import React from 'react';

import Page from '../components/Page';
import TileGrid from '../components/TileGrid';

const Art = () => (
  <Page id="art">
    <TileGrid dataSource="artsy" />
  </Page>
);

export default Art;
