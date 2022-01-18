import axios from 'axios';

export default axios.create({
  baseURL:
    'https://api.themoviedb.org/3/search/movie?api_key=691aaabafdf460ba5889ea1aaf5f4f94&language=en-US&page=1&include_adult=false',
  //   timeout: 1000,
  //   headers: {'X-Custom-Header': 'foobar'},
});
