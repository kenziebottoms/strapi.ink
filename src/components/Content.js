import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import '../styles/Content.scss';

import Copyright from '../elements/Copyright';
import Home from '../pages/Home';

class Content extends Component {
  render() {
    return (
      <section id="content">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Copyright />
      </section>
    );
  }
}

export default Content;
