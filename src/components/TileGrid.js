import React from 'react';

import Tile from './Tile';
import LoadingIcon from '../elements/LoadingIcon';

import '../styles/components/TileGrid.scss';

class TileGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.props.dataSource.then(json =>
      this.setState({ posts: json, loading: false })
    );
  }

  render() {
    return (
      <div id={this.props.id} className="tileGrid">
        {this.state.loading}
        {this.state.posts.map(post => (
          <Tile key={post._id} post={post} linkHead={this.props.linkHead} />
        ))}
        <LoadingIcon active={this.state.loading} />
      </div>
    );
  }
}

export default TileGrid;
