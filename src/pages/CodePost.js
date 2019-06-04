import React from 'react';
import { Link } from 'react-router-dom';

import Page from '../components/Page';
import LoadingIcon from '../elements/LoadingIcon';
import DateTag from '../elements/DateTag';

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

  componentDidMount() {
    restDB
      .codePost(this.props.location.pathname.split('/code/')[1])
      .then(json => {
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
            {this.state.post.script && <script src={this.state.post.script} />}
            {!this.state.post.script && (
              <img src={this.state.post.image} alt={this.state.post.title} />
            )}
            <div className="caption">
              <h3>{this.state.post.title}</h3>
              <DateTag date={this.state.post.date} />
              <p dangerouslySetInnerHTML={{ __html: this.state.post.body }} />
            </div>
          </React.Fragment>
        )}
        <LoadingIcon active={this.state.loading} />
      </Page>
    );
  }
}

export default CodePost;
