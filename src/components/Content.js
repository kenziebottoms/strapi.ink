import React from 'react';
import { Switch, Route } from 'react-router-dom';

import '../styles/components/Content.scss';

import Home from '../pages/Home';
import Art from '../pages/Art';
import ArtPost from '../pages/ArtPost';
import Pronouns from '../pages/Pronouns';
import Code from '../pages/Code';
import CodePost from '../pages/CodePost';
import Resume from '../pages/Resume';
import Achievements from '../pages/Achievements';
import Links from '../pages/Links';

class Content extends React.Component {
  render() {
    return (
      <section id="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/art" component={Art} />
          <Route path="/art" component={ArtPost} />
          <Route exact path="/code" component={Code} />
          <Route path="/code" component={CodePost} />
          <Route path="/resume" component={Resume} />
          <Route path="/achievements" component={Achievements} />
          <Route path="/links" component={Links} />
          <Route path="/pronouns" component={Pronouns} />
        </Switch>
      </section>
    );
  }
}

export default Content;
