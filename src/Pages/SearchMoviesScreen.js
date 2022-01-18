import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {MovieItem, SearchBar} from '../Common';
import {wp} from '../Global/Style';
import useSearchMovie from '../hooks/useSearchMovie';
const SearchMoviesScreen = () => {
  const [searchedText, setSearchedText] = useState('');
  const [results, errText, searchTheResults] = useSearchMovie();
  return (
    <View style={styles.container}>
      <SearchBar
        style={{marginBottom: wp(4)}}
        inputValue={searchedText}
        setInputValue={t => setSearchedText(t)}
        onSearchButtonClick={() => searchTheResults(searchedText)}
      />
      {errText !== '' && <Text>{errText}</Text>}
      <FlatList
        numColumns={2}
        data={results}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        renderItem={({item}) => {
          // poster_path //release_date //original_title
          return (
            <MovieItem
              imgSrc={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              releaseDate={item.release_date}
              title={item.original_title}
            />
          );
        }}
      />
    </View>
  );
};
export default SearchMoviesScreen;
const styles = StyleSheet.create({
  container: {
    padding: wp(4),
  },
});
