import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {CColor, wp} from '../Global/Style';
const MovieDetailsScreen = props => {
  const {route} = props;
  const {movieData} = route.params;
  const {overview, poster_path, release_date, title} = movieData;
  return (
    <View style={styles.container}>
      <View style={styles.imgAndDetailsWrapper}>
        <View style={styles.imgWrapper}>
          <Image
            style={styles.img}
            source={{uri: `https://image.tmdb.org/t/p/w500/${poster_path}`}}
          />
        </View>
        <View style={styles.detailsWrapper}>
          <Text style={styles.detailHeadText}>Movie Name:</Text>
          <Text style={styles.detailHeadValue}>{title}</Text>
          <View style={styles.devider} />
          <Text style={styles.detailHeadText}>Release Date:</Text>
          <Text style={styles.detailHeadValue}>{release_date}</Text>
        </View>
      </View>
      <View style={styles.overView}>
        <Text style={styles.overViewText}>{overview}</Text>
      </View>
    </View>
  );
};
export default MovieDetailsScreen;
const styles = StyleSheet.create({
  container: {
    padding: wp(5),
  },
  imgAndDetailsWrapper: {
    height: wp(40),
    flexDirection: 'row',
  },
  imgWrapper: {
    flex: 3,
  },
  detailsWrapper: {
    flex: 5,
    justifyContent: 'center',
    paddingLeft: wp(4),
  },
  overView: {
    marginTop: wp(4),
  },
  overViewText: {
    fontSize: wp(5),
    textAlign: 'justify',
    lineHeight: wp(7),
    color: CColor.black,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  detailHeadText: {
    fontSize: wp(5),
    fontWeight: 'bold',
    color: CColor.black,
  },
  detailHeadValue: {
    fontSize: wp(4),
    fontWeight: 'bold',
    color: CColor.blue,
  },
  devider: {
    height: 1,
    width: '100%',
    marginVertical: wp(3),
    backgroundColor: CColor.black,
  },
});
