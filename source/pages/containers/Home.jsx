import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Post from '../../posts/containers/Post';
import api from '../../api';
import Loading from '../../shared/components/Loading';
import actions from '../../actions';


import styles from './Page.css';

class Home extends Component {
  constructor(props) {
    super(props);


    this.state = {
      loading: true,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  async componentDidMount() {
    this.initialFetch();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  async initialFetch() {
    const posts = await api.posts.getList(this.props.page);

    this.props.dispatch(
      actions.setPost(posts),
    );

    this.setState({
      loading: false,
    });
  }

  handleScroll() {
    if (this.state.loading) return null;

    const scrolled = window.scrollY;
    const viewportHeight = window.innerHeight;
    const fullHeight = document.body.clientHeight;

    if (!(scrolled + viewportHeight + 100 >= fullHeight)) {
      return null;
    }

    return this.setState({ loading: true }, async () => {
      try {
        const posts = await api.posts.getList(this.props.page);

        this.props.dispatch(
          actions.setPost(posts),
        );
        this.setState({
          loading: false,
        });
      } catch (error) {
        console.error(error);
        this.setState({ loading: false });
      }
    });
  }

  render() {
    return (
      <section name="Home" className={styles.section}>
        <section className={styles.list}>
          {this.props.posts
              .map(post => <Post key={post.id} {...post} />)
          }
          {this.state.loading && (
            <Loading />
          )}
        </section>
      </section>
    );
  }

}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  page: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  return {
    posts: state.posts.entities,
    page: state.posts.page,
  };
}

// function mapDispatchToProps(dispatch, props) {
//   ret
// }

export default connect(mapStateToProps)(Home);
