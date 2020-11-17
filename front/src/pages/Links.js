import React from 'react'

import Page from '../components/Page'

import '../styles/pages/Links.scss'

import email from '../img/email.svg'
import github from '../img/github.svg'
import instagram from '../img/instagram.svg'
import twitter from '../img/twitter.svg'
import linkedin from '../img/linkedin.svg'
import codepen from '../img/codepen.svg'
import visualstudiomarketplace from '../img/visualstudiomarketplace.png'
import artstation from '../img/artstation.svg'
import society6 from '../img/society6.png'
import artistsclients from '../img/artistsclients.png'
import zazzle from '../img/zazzle.svg'

let images = {
  email,
  github,
  instagram,
  twitter,
  linkedin,
  codepen,
  visualstudiomarketplace,
  artstation,
  society6,
  artistsclients,
  zazzle
}

const links = [
  {
    name: 'Email',
    href: 'mailto:kenziebottoms@gmail.com'
  },
  {
    name: 'GitHub',
    href: 'https://github.com/kenziebottoms'
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/kenziebottoms'
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/kenziebottoms'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kenzie-bottoms'
  },
  {
    name: 'CodePen',
    href: 'https://codepen.io/kenziebottoms/'
  },
  {
    name: 'Visual Studio Marketplace',
    href: 'https://marketplace.visualstudio.com/publishers/kenziebottoms'
  },
  {
    name: 'ArtStation',
    href: 'https://kenziebottoms.artstation.com/'
  },
  {
    name: 'Zazzle',
    href: 'https://www.zazzle.com/store/judgmentalgiraffe'
  },
  {
    name: 'Society6',
    href: 'https://society6.com/claquesous'
  },
  {
    name: 'Artists&Clients',
    href: 'https://artistsnclients.com/people/kenziebottoms'
  }
]

const Links = () => 
  <Page id='links'>
    {links.map(link => 
      <a
        href={link.href} target='blank'
        key={link.name} className='block'
      >
        <img
          src={images[link.name.toLowerCase().replace(/[\s&]/g, '')]}
          alt={link.name}
        />
        {link.name}
      </a>
    )}
  </Page>


export default Links
