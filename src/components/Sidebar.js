import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Logo from '../elements/Logo';

import '../styles/components/Sidebar.scss';

class Sidebar extends React.Component {
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
    ];
  }

  render() {
    return (
      <ul id="sidebar">
        {this.routes().map(route => (
          <li key={route.name}>
            <Link
              to={route.path}
              className={
                (route.icon &&
                  this.props.location.pathname.indexOf(route.path) >= 0) ||
                (!route.icon && this.props.location.pathname === '/')
                  ? 'active'
                  : ''
              }
            >
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
export default withRouter(Sidebar);
