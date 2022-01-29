import React, {useContext, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {HgButton, HGinput} from '../../Common';
import {LanguageContext} from '../../Context/LanguageContext';
import {CColor, wp} from '../../Global/Style';
import {HGLang} from '../../Language';
import {buttonBackgroundEnum, LanguageEnum} from '../../utils/types';
const LoginScreen = () => {
  const [name, setName] = useState<string>('');
  const lng = useContext(LanguageContext);
  return (
    <View style={styles.container}>
      <View style={styles.languageWrapper}>
        <Text>{HGLang(lng.language)?.selectYouLang}</Text>
        <View style={{flexDirection: 'row', flex: 1, alignSelf: 'stretch'}}>
          <View style={{flex: 1}}>
            <HgButton
              type={
                lng.language === LanguageEnum.de
                  ? buttonBackgroundEnum.primary
                  : undefined
              }
              title="Germany"
              onPress={() => lng.setLanguage(LanguageEnum.de)}
            />
          </View>
          <View style={{flex: 1}}>
            <HgButton
              type={
                lng?.language === LanguageEnum.en
                  ? buttonBackgroundEnum.primary
                  : undefined
              }
              title="English"
              onPress={() => lng.setLanguage(LanguageEnum.en)}
            />
          </View>
        </View>
      </View>
      <HGinput
        label={HGLang(lng.language)?.nameLastName}
        inputValue={name}
        setInputValue={t => setName(t)}
      />
      <HGinput
        style={{marginTop: wp(4)}}
        label={HGLang(lng.language)?.email}
        inputValue={name}
        setInputValue={t => setName(t)}
      />
      <HgButton
        type={buttonBackgroundEnum.primary}
        title={HGLang(lng.language)?.submit || ''}
        onPress={() => console.warn('adsasd')}
      />
    </View>
  );
};
export default LoginScreen;
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
