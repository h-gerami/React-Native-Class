import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {CColor, wp} from '../Global/Style';
const PageLayout = () => {
  return (
    <View style={styles.container}>
      <View style={styles.text1}></View>
      <View style={styles.text2}>
        <View style={styles.v2}></View>
        <View style={styles.v1}>
          <View style={styles.v3} />
          <View style={styles.v3} />
          <View style={styles.v3} />
        </View>
      </View>
      <View style={styles.text3}></View>
      <Text style={styles.plus}>+</Text>
    </View>
  );
};
export default PageLayout;
const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: 'black',
    // alignItems: 'stretch',
    flexDirection: 'row',
    height: 400,
    // justifyContent: 'space-evenly',
    // justifyContent: 'space-around',
  },
  text1: {
    borderWidth: 3,
    flex: 2,
  },
  text2: {
    borderWidth: 3,
    // alignSelf: 'center',
    flex: 10,
  },
  text3: {
    borderWidth: 3,
    flex: 1,
  },
  v2: {
    backgroundColor: 'red',
    flex: 1,
  },
  v1: {
    backgroundColor: 'green',
    flex: 1,
    flexDirection: 'row',
  },
  v3: {
    borderWidth: 3,
    flex: 1,
  },
  plus: {
    fontSize: 100,
    position: 'absolute',
    top: -30,
    right: 40,
  },
});
