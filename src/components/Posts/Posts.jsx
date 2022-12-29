import axios from 'axios';
import { Component } from 'react';
import { getPostById, getPosts } from 'services/posts.service';

import { Button } from '../Button';

import { PostsError } from './PostsErorr';
import { PostsItem } from './PostsItem';
import { PostsLoader } from './PostsLoader';
import { SearchPosts } from './SearchPosts';

export class Posts extends Component {
  state = {
    posts: null,
    page: 1,
  };

  async componentDidMount() {
    // axios.get('http://70.34.201.18:8080/posts').then(({ data }) => this.setState({ posts: data }));
    try {
      const posts = await getPosts();
      this.setState({ posts });
    } catch (error) {
      console.log(error.message);
    }
  }

  async componentDidUpdate(_, prevState) {
    const { page } = this.state;
    if (prevState.page !== this.state.page) {
      try {
        const posts = await getPosts(page);
        this.setState(prev => ({ posts: { ...posts, data: [...prev.posts.data, ...posts.data] } }));
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  handleChangePage = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    return (
      <>
        <SearchPosts />

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
          </div>
        </div>
      </>
    );
  }
}
