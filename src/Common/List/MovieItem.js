import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {CColor, wp} from '../../Global/Style';

const MovieItem = props => {
  const {imgSrc, releaseDate, title} = props;
  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image source={{uri: imgSrc}} style={styles.img} />
      </View>
      <View style={styles.detailsWrapper}>
        <Text style={styles.text}>{releaseDate}</Text>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};
export {MovieItem};
const styles = StyleSheet.create({
  container: {
    width: wp(43),
    marginBottom: wp(4),
    backgroundColor: CColor.white,
    paddingVertical: wp(4),
    borderRadius: wp(4),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  detailsWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: wp(4),
  },
  img: {
    width: '100%',
    height: wp(40),
    resizeMode: 'contain',
  },
  text: {
    fontSize: wp(4),
    color: CColor.black,
  },
});
