import axios from 'axios';
import { FETCH_STATUS } from 'constants/fetchStatus';
import { Component } from 'react';
import { getPostById, getPosts } from 'services/posts.service';

import { Button } from '../Button';

import { PostsError } from './PostsErorr';
import { PostsItem } from './PostsItem';
import { PostsLoader } from './PostsLoader';
import { SearchPosts } from './SearchPosts';

// const LOCAL_KEY = 'state';

export class Posts extends Component {
  state = {
    posts: null,
    page: 1,
    // isLoading: false,
    // error: null,
    status: 'idle',
  };

  async componentDidMount() {
    // localStorage.setItem(LOCAL_KEY, JSON.stringify(this.state));
    // const localData = localStorage.getItem(LOCAL_KEY);
    // console.log('localData', JSON.parse(localData));

    axios.get('http://70.34.201.18:8080/posts').then(({ data }) => this.setState({ posts: data }));

    this.setState({ status: FETCH_STATUS.Loading });
    try {
      const posts = await getPosts();
      this.setState({ posts, status: FETCH_STATUS.Resolved });
    } catch (error) {
      // console.log(error.message);
      this.setState({ status: FETCH_STATUS.Rejected });
    }
  }

  async componentDidUpdate(_, prevState) {
    const { page } = this.state;
    if (prevState.page !== page) {
      this.setState({ status: FETCH_STATUS.Loading });
      try {
        const posts = await getPosts(page);
        this.setState(prev => ({
          posts: { ...posts, data: [...prev.posts.data, ...posts.data] },
          status: FETCH_STATUS.Resolved,
        }));
      } catch {
        // console.log(error.message);
        this.setState({ status: FETCH_STATUS.Rejected });
      }
    }
  }

  handleChangePage = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    const { status } = this.state;
    console.log('status :>> ', status);
    if (status === FETCH_STATUS.Loading) {
      return <PostsLoader />;
    }
    if (status === FETCH_STATUS.Rejected) {
      return <PostsError />;
    }
    return (
      <>
        <div className="container-fluid g-0 pb-5 mb-5">
          <div className="row">
            {this.state.posts?.data?.map(post => (
              <PostsItem key={post.id} post={post} />
            ))}
          </div>
        </div>

        <div className="pagination">
          <div className="btn-group my-2 mx-auto btn-group-lg">
            {/* {[...Array(this.state.posts.total_pages)].map((_, index) => (
              <Button
                key={index}
                disabled={index + 1 === posts.page}
                onClick={() => {
                  this.fatchData({ page: index + 1 });
                }}
              >
                {index + 1}
              </Button> */}
            {/* ))} */}

            <Button className="ms-4 btn-primary" onClick={this.handleChangePage}>
              Load more
            </Button>
            {/* {status === FETCH_STATUS.Loading && <PostsLoader />} */}
          </div>
        </div>
      </>
    );
  }
}
