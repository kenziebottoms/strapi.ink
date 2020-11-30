import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/components/Tile.scss'

function formatDate(date) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  let d = new Date(date + 'T00:00:00.000')
  return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
}

const Tile = ({
  linkHead,
  post: {
    id,
    Title,
    Date,
    Slug,
    Preview: {
      name: thumbnail,
    },
  },
}) =>
  <div
    className='art tile'
    key={id}
    style={{ backgroundImage: `url(${thumbnail})` }}
  >
    <Link to={linkHead + '/' + Slug}>
      <div className='overlay'>
        <h3>{Title}</h3>
        <div className='date'>{formatDate(Date)}</div>
      </div>
    </Link>
  </div>


export default Tile
