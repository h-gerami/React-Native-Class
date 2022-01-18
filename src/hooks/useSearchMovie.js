import React, {useEffect, useState} from 'react';
import movieSearcher from '../Services/ServerMovie';
export default () => {
  const [results, setResults] = useState([]);
  const [errText, setErrText] = useState('');
  const searchTheResults = async term => {
    // var requestOptions = {
    //   method: 'GET',
    //   redirect: 'follow',
    // };
    // fetch(
    //   'https://api.themoviedb.org/3/search/movie?api_key=691aaabafdf460ba5889ea1aaf5f4f94&language=en-US&page=1&include_adult=false&query=spiderman',
    //   requestOptions,
    // )
    //   .then(response => response.json())
    //   .then(result => setResults(result.results))
    //   .catch(error => console.log('error', error));
    setResults([]);
    try {
      const response = await movieSearcher.get('/', {
        params: {
          query: term,
        },
      });
      setResults(response.data.results);
      setErrText('');
    } catch (err) {
      setErrText('Somthing Went Wrong ...');
    }
  };

  useEffect(() => {
    searchTheResults('spiderman');
  }, []);
  return [results, errText, searchTheResults];
};
