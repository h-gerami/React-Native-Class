import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {CColor, wp} from '../../Global/Style';
const HGinput = props => {
  const {inputValue, setInputValue} = props;
  return (
    <View>
      <Text>Name :</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={inputValue}
        onChangeText={t => setInputValue(t)}
      />
    </View>
  );
};
export {HGinput};
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
