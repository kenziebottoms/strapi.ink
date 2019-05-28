import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';

class Content extends Component {
  render() {
    return (
      <section id="content">
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </section>
    );
  }
}

export default Content;
