import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {HGinput} from '../Common';
import {CColor, wp} from '../Global/Style';
const TextScreen = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <View style={styles.container}>
      <HGinput inputValue={inputValue} setInputValue={setInputValue} />
      <Text>{`Your Name is :` + inputValue}</Text>
    </View>
  );
};
export default TextScreen;
const styles = StyleSheet.create({
  container: {
    padding: wp(5),
  },
  input: {
    borderWidth: 1,
    height: wp(10),
    backgroundColor: CColor.white,
    fontSize: wp(4),
    paddingHorizontal: wp(3),
    borderRadius: wp(1),
  },
});
