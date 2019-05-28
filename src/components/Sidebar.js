import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../elements/Logo';

import '../styles/Sidebar.scss';

class Sidebar extends Component {
  render() {
    return (
      <ul id="sidebar">
        {this.props.routes.map(route => (
          <li key={route.slug}>
            <Link to={route.path}>
              {route.icon ? (
                <i class="material-icons">{route.icon}</i>
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
