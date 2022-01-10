import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
const HgButton = props => {
  const {onPress, type, title} = props;
  const backGroundColorReturner = () => {
    if (type === 'danger') {
      return 'red';
    } else {
      return 'white';
    }
  };
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: backGroundColorReturner()}]}
      onPress={onPress}>
      <Text style={[styles.buttonText, type && {color: 'white'}]}>{title}</Text>
    </TouchableOpacity>
  );
};
export {HgButton};
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    padding: 20,
    alignSelf: 'stretch',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'gray',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
});
