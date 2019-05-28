import React from 'react';

import Sidebar from './components/Sidebar';
import Content from './components/Content';

import './styles/App.scss';

const routes = [
  {
    name: 'Home',
    slug: 'home',
    path: '/home',
    icon: false,
  },
  {
    name: 'Art',
    slug: 'art',
    path: '/art',
    icon: 'color_lens',
  },
  {
    name: 'Code',
    slug: 'code',
    path: '/code',
    icon: 'code',
  },
];

function App() {
  return (
    <React.Fragment>
      <Sidebar routes={routes} />
      <Content />
    </React.Fragment>
  );
}

export default App;
