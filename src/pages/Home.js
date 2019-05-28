import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/Home.scss';

import Copyright from '../elements/Copyright';

const Home = () => (
  <div id="home">
    <div id="bio" className="block wide">
      <p>
        Kenzie Bottoms is a feminist, artist, and developer born and raised in
        Nashville.{' '}
        <a href="https://en.wikipedia.org/wiki/Singular_they" target="blank">
          They
        </a>{' '}
        are always open to new opportunities, technical or creative (or better
        yet, both), and their default mindset, for better or worse, is usually,
        "Challenge accepted." They skate with{' '}
        <a href="https://www.nashvillerollerderby.com/" target="blank">
          Nashville Roller Derby
        </a>{' '}
        under the name{' '}
        <a href="https://en.wikipedia.org/wiki/Ellen_Ripley" target="blank">
          Ellen R.I.P.ley
        </a>
        . They are a full-stack Node.js{' '}
        <a href="http://nashvillesoftwareschool.com/" target="blank">
          Nashville Software School
        </a>{' '}
        graduate, and they are currently routinely jumping into the deep end
        with{' '}
        <a href="https://fortyau.com/" target="blank">
          FortyAU
        </a>
        .
      </p>
    </div>
    <Link className="block" to="/art">
      <i className="material-icons">color_lens</i>
      Art
    </Link>
    <Link className="block" to="/code">
      <i className="material-icons">code</i>
      Code
    </Link>
    <Link className="block" to="/resume">
      <i className="material-icons">assignment_ind</i>
      Resume
    </Link>
    <Link className="block" to="/links">
      <i className="material-icons">launch</i>
      Links
    </Link>
    <Link className="block wide" to="/achievements">
      <i className="material-icons">stars</i>
      Achievements
    </Link>
    <Copyright />
  </div>
);

export default Home;
