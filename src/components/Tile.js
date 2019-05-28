import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Tile.scss';

const Tile = props => (
  <div
    className="art tile"
    key={props.post._id}
    style={{ backgroundImage: `url(${props.post.thumbnail})` }}
  >
    <Link to="/art/{props.post._id}">
      <div className="overlay">
        <h3>{props.post.title}</h3>
        <div className="date">{props.post.date}</div>
      </div>
    </Link>
  </div>
);

export default Tile;
