import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {HgButton} from '../Common';
import {LanguageContext} from '../Context/LanguageContext';
import {buttonBackgroundEnum} from '../utils/types';
interface HomeScreenType {
  navigation: any;
}
function HomeScreen(props: HomeScreenType) {
  const {navigation} = props;
  const lng = useContext(LanguageContext);
  return (
    <View style={styles.homeCountainer}>
      <Text>{lng?.language}</Text>
      <HgButton
        type={buttonBackgroundEnum.success}
        title="ListScreen"
        onPress={() => navigation.navigate('ListScreen')}
      />
      <HgButton
        type={buttonBackgroundEnum.success}
        title="CounterScreen"
        onPress={() => navigation.navigate('CounterScreen')}
      />
      <HgButton
        type={buttonBackgroundEnum.success}
        title="ColorGenerator"
        onPress={() => navigation.navigate('ColorGenerator')}
      />
      <HgButton
        type={buttonBackgroundEnum.success}
        title="TextScreen"
        onPress={() => navigation.navigate('TextScreen')}
      />
      <HgButton
        type={buttonBackgroundEnum.success}
        title="PageLayout"
        onPress={() => navigation.navigate('PageLayout')}
      />
      <HgButton
        type={buttonBackgroundEnum.success}
        title="SearchMoviesScreen"
        onPress={() => navigation.navigate('SearchMoviesScreen')}
      />
      <HgButton
        type={buttonBackgroundEnum.success}
        title="LoginContainer"
        onPress={() => navigation.navigate('LoginContainer')}
      />
      <HgButton
        type={buttonBackgroundEnum.success}
        title="SettingScreen"
        onPress={() => navigation.navigate('SettingScreen')}
      />
      <HgButton
        type={buttonBackgroundEnum.success}
        title="NoteScreen"
        onPress={() => navigation.navigate('NoteScreen')}
      />
    </View>
  );
}
export default HomeScreen;
const styles = StyleSheet.create({
  homeCountainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyle: {
    width: 300,
    height: 400,
    resizeMode: 'stretch',
  },
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
