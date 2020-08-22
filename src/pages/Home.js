import React from 'react'
import { Link } from 'react-router-dom'

import Page from '../components/Page'

import '../styles/pages/Home.scss'

const Home = () => 
  <Page id='home'>
    <div id='bio' className='block wide'>
      <p>
        Kenzie Bottoms is a feminist, artist, and developer born and raised in
        Nashville. <Link to='/pronouns'>They</Link> are passionate about making
        all spaces, professional and otherwise, safe for women and nonbinary
        people, people of color, trans people, disabled people, and
        neurodivergent people. They are a jammer for the{' '}
        <a href='https://www.nashvillerollerderby.com/' target='blank'>
          Nashville Roller Derby
        </a>{' '}
        Brawl Stars and skate under the name{' '}
        <a href='https://en.wikipedia.org/wiki/Ellen_Ripley' target='blank'>
          Ellen R.I.P.ley
        </a>
        . They are a full-stack Node.js{' '}
        <a href='http://nashvillesoftwareschool.com/' target='blank'>
          Nashville Software School
        </a>{' '}
        graduate, and they are currently nursing a legacy React codebase back to
        health while building onto it with{' '}
        <a href='https://www.razorsync.com/' target='blank'>
          RazorSync
        </a>
        .
      </p>
    </div>
    <Link className='block' to='/art'>
      <i className='material-icons'>color_lens</i>
      Art
    </Link>
    <Link className='block' to='/code'>
      <i className='material-icons'>code</i>
      Code
    </Link>
    <Link className='block' to='/resume'>
      <i className='material-icons'>assignment_ind</i>
      Resume
    </Link>
    <Link className='block' to='/links'>
      <i className='material-icons'>launch</i>
      Links
    </Link>
    <Link className='block wide' to='/achievements'>
      <i className='material-icons'>stars</i>
      Achievements
    </Link>
  </Page>


export default Home
