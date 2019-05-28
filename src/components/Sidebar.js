import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../elements/Logo';

import '../styles/Sidebar.scss';

class Sidebar extends Component {

  routes() {
    return [
      {
        name: 'home',
        path: '/',
        icon: false,
      },
      {
        name: 'art',
        path: '/art',
        icon: 'color_lens',
      },
      {
        name: 'code',
        path: '/code',
        icon: 'code',
      },
      {
        name: 'resume',
        path: '/resume',
        icon: 'assignment_ind',
      },
      {
        name: 'feats',
        path: '/achievements',
        icon: 'stars',
      },
      {
        name: 'links',
        path: '/links',
        icon: 'launch',
      },
    ]
  };

  render() {
    return (
      <ul id="sidebar">
        {this.routes().map(route => (
          <li key={route.name}>
            <Link to={route.path}>
              {route.icon ? (
                <i className="material-icons">{route.icon}</i>
              ) : (
                <Logo link={false} />
              )}
              <label>{route.name}</label>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}
export default Sidebar;
