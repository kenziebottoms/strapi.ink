import React from 'react';
import { Switch, Route } from 'react-router-dom';

import '../styles/components/Content.scss';

import Home from '../pages/Home';
import Art from '../pages/Art';
import Code from '../pages/Code';
import Resume from '../pages/Resume';

class Content extends React.Component {
  render() {
    return (
      <section id="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/art" component={Art} />
          <Route exact path="/code" component={Code} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </section>
    );
  }
}

export default Content;
