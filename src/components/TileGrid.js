import React from 'react';
import { Link } from 'react-router-dom';

import Tile from './Tile';
import LoadingIcon from '../elements/LoadingIcon';

import '../styles/components/TileGrid.scss';

import RESTDB from '../keys';

class TileGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
    };
  }

  componentDidMount() {
    fetch(
      `${RESTDB.url}/${this.props.dataSource}?apikey=${
        RESTDB.key
      }&sort=date&dir=-1`
    )
      .then(response => response.json())
      .then(json => {
        this.setState({ posts: json, loading: false });
      });
  }

  render() {
    return (
      <div id={this.props.id} className="tileGrid">
        {this.state.posts.map(post => (
          <Tile key={post._id} post={post} />
        ))}
        <LoadingIcon active={this.state.loading} />
      </div>
    );
  }
}

export default TileGrid;
