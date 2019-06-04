import React from 'react';
import { Link } from 'react-router-dom';

import Page from '../components/Page';
import LoadingIcon from '../elements/LoadingIcon';

import '../styles/pages/Post.scss';

import restDB from '../services/restDB';

class CodePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
      loading: true,
    };
  }

  formatDate(epochString) {
    let date = new Date(epochString * 1000).toString();
    let [_, month, dayOfMonth, year] = date.split(' ');
    return `${month} ${dayOfMonth}, ${year}`;
  }

  componentDidMount() {
    restDB
      .codePost(this.props.location.pathname.split('/code/')[1])
      .then(json => {
        // make all links open in new tabs
        json.body = json.body.replace('<a ', "<a target='_blank' ");
        this.setState({ post: json, loading: false });
      });
  }

  render() {
    return (
      <Page id="post" className="code">
        <Link className="back" to="/code">
          <i className="material-icons">chevron_left</i>
          Back to code
        </Link>
        {this.state.post && (
          <React.Fragment>
            <img src={this.state.post.image} alt={this.state.post.title} />
            <h3>{this.state.post.title}</h3>
            <p className="date">{this.formatDate(this.state.post.date)}</p>
            <p dangerouslySetInnerHTML={{ __html: this.state.post.body }} />
          </React.Fragment>
        )}
        <LoadingIcon active={this.state.loading} />
      </Page>
    );
  }
}

export default CodePost;
