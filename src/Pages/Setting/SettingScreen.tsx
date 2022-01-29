import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Switch} from '../../Common';
import {CColor, wp} from '../../Global/Style';
const SettingScreen = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <Text>Please Select Your Theme</Text>
      <Text>Dark</Text>
      <Switch
        size="large"
        onSwitchClick={() => setIsDark(!isDark)}
        isOn={isDark}
      />
      <Text>Light</Text>
      <Switch
        size="large"
        onSwitchClick={() => setIsDark(!isDark)}
        isOn={!isDark}
      />
    </View>
  );
};
export default SettingScreen;
const styles = StyleSheet.create({
  container: {
    padding: wp(5),
  },
  languageWrapper: {
    height: wp(20),
    borderBottomWidth: 1,
    borderColor: CColor.black,
    marginBottom: wp(4),
  },
});
