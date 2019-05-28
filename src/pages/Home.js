import React from 'react';

import '../styles/Home.scss';

const Home = () => (
  <div id="home">
    <div id="bio" className="block resume">
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
    <a className="block art" href="/#!/projects/art">
      <i className="material-icons">color_lens</i>
      Art
    </a>
    <a className="block code" href="/#!/projects/code">
      <i className="material-icons">code</i>
      Code
    </a>
    <a className="block resume" href="/#!/resume">
      <i className="material-icons">assignment_ind</i>
      Resume
    </a>
    <a className="block links" href="/#!/links">
      <i className="material-icons">launch</i>
      Links
    </a>
    <a className="block achievements" href="/#!/achievements">
      <i className="material-icons">stars</i>
      Achievements
    </a>
  </div>
);

export default Home;
