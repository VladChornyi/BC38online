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

// export const someFunc = () => {
//   const data = postsService.get('', { params: { page } });
//   console.log('data', data);
//   return data;
// };

// export const getPostById = async (id = 112) => {
//   const { data } = await postsService.get(`/${id}`);
//   console.log('data', data);
// };
