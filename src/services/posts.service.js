import axios from 'axios';

// axios.defaults.baseURL = 'http://70.34.201.18:8080';

const postsService = axios.create({
  baseURL: 'http://70.34.201.18:8080/posts',
  params: {
    limit: 6,
  },
});

export const getPosts = async page => {
  const { data } = await postsService.get('', { params: { page } });
  return data;
  // return postsService.get('', { params: { page } }).then(data => data.data);
};

const postsApi = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://taupe-croissant-c4162a.netlify.app/api'
      : 'http://70.34.201.18:8080',
});

export const getPostsService = async params => {
  const { data } = await postsApi.get('/posts', { params: { ...params, limit: 6 } });
  return data;
};

export const createNewPostService = async body => {
  const { data } = await postsApi.post('/posts', body);
  return data;
};

export const getSinglePostService = async (id, params) => {
  const { data } = await postsApi.get(`/posts/${id}`, { params });
  return data;
};

export const deletePostService = id => {
  return postsApi.delete(`/posts/${id}`);
};
