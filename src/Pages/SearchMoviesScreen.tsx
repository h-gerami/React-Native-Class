import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList, Alert} from 'react-native';
import {MovieItem, SearchBar} from '../Common';
import {wp} from '../Global/Style';
import useSearchMovie from '../hooks/useSearchMovie';
interface SearchMoviesScreenType {
  navigation: any;
}
const SearchMoviesScreen = (props: SearchMoviesScreenType) => {
  const {navigation} = props;
  const [searchedText, setSearchedText] = useState<string>('');
  const {results, errText, searchTheResults} = useSearchMovie();
  // const createThreeButtonAlert = () =>
  //   Alert.alert('Alert Title', 'My Alert Msg', [
  //     {
  //       text: 'Ask me later',
  //       onPress: () => console.log('Ask me later pressed'),
  //     },
  //     {
  //       text: 'Cancel',
  //       onPress: () => console.log('Cancel Pressed'),
  //       style: 'cancel',
  //     },
  //     {text: 'OK', onPress: () => console.log('OK Pressed')},
  //   ]);
  return (
    <View style={styles.container}>
      <SearchBar
        style={{marginBottom: wp(4)}}
        inputValue={searchedText}
        setInputValue={t => setSearchedText(t)}
        onSearchButtonClick={() => searchTheResults(searchedText)}
      />
      <View style={{flex: 1}}>
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
            // poster_path //release_date //original_title //overview

            return (
              <MovieItem
                onMovieItemClickHandler={() =>
                  navigation.navigate('MovieDetailsScreen', {
                    movieData: item,
                  })
                }
                imgSrc={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                releaseDate={item.release_date}
                title={item.original_title}
              />
            );
          }}
        />
      </View>
    </View>
  );
};
export default SearchMoviesScreen;
const styles = StyleSheet.create({
  container: {
    padding: wp(4),
    paddingBottom: wp(15),
    flex: 1,
  },
});
