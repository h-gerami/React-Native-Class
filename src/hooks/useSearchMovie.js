import React, {useEffect, useState} from 'react';
import movieSearcher from '../Services/ServerMovie';
export default () => {
  const [results, setResults] = useState([]);
  const [errText, setErrText] = useState('');
  const searchTheResults = async term => {
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
