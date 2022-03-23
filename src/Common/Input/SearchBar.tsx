import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {CColor, wp} from '../../Global/Style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {HgButton} from '../Button/HgButton';
import {buttonBackgroundEnum} from '../../utils/types';
interface SearchBarType {
  inputValue: string;
  setInputValue: (value: string) => void;
  onSearchButtonClick: () => void;
  style?: object;
  placeholder?: string;
}
const SearchBar = (props: SearchBarType) => {
  const {inputValue, setInputValue, onSearchButtonClick, style, placeholder} =
    props;
  return (
    <View style={[styles.container, style]}>
      <View style={styles.iconWrapper}>
        <Icon name="magnify" size={wp(10)} color={CColor.black} />
      </View>
      <View style={styles.textInputWrapper}>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder={placeholder || 'Search ...'}
          value={inputValue}
          onChangeText={setInputValue}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <HgButton
          onPress={onSearchButtonClick}
          type={buttonBackgroundEnum.primary}
          title="Submit"
        />
      </View>
    </View>
  );
};
export {SearchBar};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: CColor.white,
    height: wp(15),
    alignItems: 'stretch',
    borderRadius: wp(2),
  },
  input: {
    height: wp(15),
    backgroundColor: CColor.white,
    fontSize: wp(4),
    paddingHorizontal: wp(1),
    borderRadius: wp(1),
  },
  iconWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputWrapper: {
    flex: 4,
  },
  buttonWrapper: {
    flex: 2,
  },
});
