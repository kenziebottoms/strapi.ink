import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import '../styles/Content.scss';

import Home from '../pages/Home';
import Resume from '../pages/Resume';

class Content extends Component {
  render() {
    return (
      <section id="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </section>
    );
  }
}

export default Content;
