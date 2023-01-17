import axios from 'axios';
import { Button } from 'components/Button';
import GoBack from 'components/GoBack/GoBack';
import { FETCH_STATUS } from 'constants/fetchStatus';
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { getPostById, getPostsService } from 'services/posts.service';

import { PostsError } from './PostsErorr';
import { PostsItem } from './PostsItem';
import { PostsLoader } from './PostsLoader';
import { SearchPosts } from './SearchPosts';

// const LOCAL_KEY = 'state';
// const initial = { page: 1, isLoading: false };

export const PostsPage = () => {
  const [posts, setPosts] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(FETCH_STATUS.Idle);
  const location = useLocation();

  // const [state, setState] = useState(...initial);

  const isFirstRender = useRef(true);

  //did mount
  useEffect(() => {
    const fetchPosts = async () => {
      setStatus(FETCH_STATUS.Loading);
      try {
        const posts = await getPostsService();
        setPosts(posts);
        setStatus(FETCH_STATUS.Resolved);
      } catch (error) {
        setStatus(FETCH_STATUS.Rejected);
      }
    };
    // axios.get('http://70.34.201.18:8080/posts').then(({ data }) => setPosts(data));
    fetchPosts();
    //
  }, []);

  //did update
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const fetchMore = async () => {
      setStatus(FETCH_STATUS.Loading);
      try {
        const posts = await getPostsService(page);
        setPosts(prevPosts => ({
          ...posts,
          data: [...prevPosts.data, ...posts.data],
        }));
        setStatus(FETCH_STATUS.Resolved);
      } catch {
        setError(FETCH_STATUS.Rejected);
      }
    };
    fetchMore();
  }, [page]);

  const handleChangePage = () => {
    setPage(prevPage => prevPage + 1);
    setIsLoading(true);
  };

  if (status === FETCH_STATUS.Loading) {
    return <PostsLoader />;
  }
  if (status === FETCH_STATUS.Rejected) {
    return <PostsError />;
  }
  return (
    <>
      {/* <SearchPosts /> */}
      <GoBack />
      <div className="container-fluid g-0 pb-5 mb-5">
        <div className="row">
          {posts?.data?.map(post => (
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

          <Button className="ms-4 btn-primary" onClick={handleChangePage}>
            Load more
          </Button>
          {/* {status === FETCH_STATUS.Loading && <PostsLoader />} */}
        </div>
      </div>
    </>
  );
};
