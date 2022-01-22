import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {CColor, wp} from '../../Global/Style';
import {buttonBackgroundEnum} from '../../utils/types';
interface HgButtonType {
  onPress: () => void;
  type?: buttonBackgroundEnum;
  title: string;
}
const HgButton = (props: HgButtonType) => {
  const {onPress, type, title} = props;
  const backGroundColorReturner = () => {
    if (type === 'danger') {
      return CColor.red;
    } else if (type === 'success') {
      return CColor.green;
    } else if (type == 'primary') {
      return CColor.blue;
    } else {
      return CColor.white;
    }
  };
  //  ? !
  const isType = () => {
    if (type) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: backGroundColorReturner()}]}
      onPress={onPress}>
      <Text style={[styles.buttonText, isType() && {color: CColor.white}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export {HgButton};
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
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
    height: wp(10),
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: CColor.black,
  },
});
