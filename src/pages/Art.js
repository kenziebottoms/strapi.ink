import React from 'react';

import RESTDB from '../keys';

import '../styles/components/TileGrid.scss';

import Tile from '../components/Tile';
import Copyright from '../elements/Copyright';
import LoadingIcon from '../elements/LoadingIcon';

class Art extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      art: [],
      loading: true,
    };
  }

  componentDidMount() {
    fetch(`${RESTDB.url}/artsy?apikey=${RESTDB.key}&sort=date&dir=-1`)
      .then(response => response.json())
      .then(json => {
        this.setState({ art: json, loading: false });
      });
  }

  render() {
    return (
      <React.Fragment>
        <div id="art" className="tileGrid">
          {this.state.art.map(post => (
            <Tile key={post._id} post={post} />
          ))}
          <LoadingIcon active={this.state.loading} />
        </div>
        <Copyright />
      </React.Fragment>
    );
  }
}
export default Art;
