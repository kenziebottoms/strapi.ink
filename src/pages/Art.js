import React from 'react';

import Page from '../components/Page';
import TileGrid from '../components/TileGrid';

import restDb from '../services/restDB';

const Art = () => (
  <Page id="art">
    <TileGrid dataSource={restDb.allArtPosts()} linkHead="art" />
  </Page>
);

export default Art;
