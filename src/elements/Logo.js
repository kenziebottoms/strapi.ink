import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import logo from '../img/kb.svg';

class Logo extends Component {
  render() {
    return this.props.link ? (
      <img src={logo} />
    ) : (
      <Link to="/">
        <img src={logo} />
      </Link>
    );
  }
}

export default Logo;
