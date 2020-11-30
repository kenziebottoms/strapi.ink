import React from 'react'

import Page from '../components/Page'
import TileGrid from '../components/TileGrid'

import restDb from '../services/restDB'
import { art } from '../services/strapi'

const Art = () =>
  <Page id='art'>
    <TileGrid dataSource={art.fetchAll()} linkHead='art'>
      <blockquote className='commissions'>
        Kenzie is always happy to take commissions. It can be{' '}
        <strong>anything</strong>: sticker designs, Coke can sculptures,
        photorealistic pet portraits, tattoo designs, character sheets, or
        something even more adventurous.{' '}
        <a href='mailto:kenziebottoms@gmail.com' target='blank'>
          Email them!
        </a>
      </blockquote>
    </TileGrid>
  </Page>


export default Art
