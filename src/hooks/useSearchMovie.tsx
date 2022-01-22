import React, {useEffect, useState} from 'react';
import movieSearcher from '../Services/ServerMovie';
import {MovieItemType} from '../utils/types';
export default () => {
  const [results, setResults] = useState<MovieItemType[]>([]);
  const [errText, setErrText] = useState<string>('');
  const searchTheResults: (v: string) => void = async (term: string) => {
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
  return {results, errText, searchTheResults};
};
