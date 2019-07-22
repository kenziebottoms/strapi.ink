import React from 'react';

import Page from '../components/Page';

import '../styles/pages/Links.scss';

import email from '../img/email.svg';
import github from '../img/github.svg';
import insta from '../img/insta.svg';
import twitter from '../img/twitter.svg';
import linkedin from '../img/linkedin.svg';
import codepen from '../img/codepen.svg';
import vscode from '../img/vscode.png';
import artstation from '../img/artstation.svg';
import society6 from '../img/society6.png';
import artistsnclients from '../img/artistsnclients.png';

const links = [
  {
    name: 'Email',
    href: 'mailto:kenziebottoms@gmail.com',
    image: email,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/kenziebottoms',
    image: github,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/kenziebottoms',
    image: insta,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/kenziebottoms',
    image: twitter,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kenzie-bottoms',
    image: linkedin,
  },
  {
    name: 'CodePen',
    href: 'https://codepen.io/kenziebottoms/',
    image: codepen,
  },
  {
    name: 'Visual Studio Marketplace',
    href: 'https://marketplace.visualstudio.com/publishers/kenziebottoms',
    image: vscode,
  },
  {
    name: 'ArtStation',
    href: 'https://kenziebottoms.artstation.com/',
    image: artstation,
  },
  {
    name: 'Society6',
    href: 'https://society6.com/claquesous',
    image: society6,
  },
  {
    name: 'Artists&Clients',
    href: 'https://artistsnclients.com/people/kenziebottoms',
    image: artistsnclients,
  },
];

const Links = () => (
  <Page id="links">
    {links.map(link => (
      <a href={link.href} target="blank" key={link.name} className="block">
        <img src={link.image} alt={link.name} />
        {link.name}
      </a>
    ))}
  </Page>
);

export default Links;
