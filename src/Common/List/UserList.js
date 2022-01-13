import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import {CColor} from '../../Global/Style';
const UserList = props => {
  const {name, lastName, imgSource} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{'Name: ' + name}</Text>
      {lastName ? (
        <Text style={styles.textStyle}>{'Last Name: ' + lastName}</Text>
      ) : null}
      {imgSource ? (
        <TouchableOpacity onPress={() => alert(name)}>
          <View style={styles.imgWrapper}>
            <Image style={styles.imgStyle} source={imgSource} />
          </View>
        </TouchableOpacity>
      ) : (
        <View style={styles.noPicWrapper}>
          <Text>No Picture</Text>
        </View>
      )}
    </View>
  );
};
export {UserList};
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    margin: 10,
    padding: 20,
    borderRadius: 10,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    backgroundColor: CColor.white,
  },
  noPicWrapper: {
    margin: 20,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgWrapper: {
    borderRadius: 20,
    overflow: 'hidden',
    width: 300,
    height: 200,
    margin: 10,
  },
  imgStyle: {
    resizeMode: 'stretch',
    width: '100%',
    height: '100%',
  },
  textStyle: {
    color: CColor.black,
    fontSize: 14,
  },
  lnameStyle: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});
