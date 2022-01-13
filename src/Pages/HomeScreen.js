import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {HgButton} from '../Common';

function HomeScreen(props) {
  const {navigation} = props;
  return (
    <View style={styles.homeCountainer}>
      <Text>Home Screen</Text>
      <HgButton
        type="success"
        title="ListScreen"
        onPress={() => navigation.navigate('ListScreen')}
      />
      <HgButton
        type="success"
        title="CounterScreen"
        onPress={() => navigation.navigate('CounterScreen')}
      />
      <HgButton
        type="success"
        title="ColorGenerator"
        onPress={() => navigation.navigate('ColorGenerator')}
      />
      <HgButton
        type="success"
        title="TextScreen"
        onPress={() => navigation.navigate('TextScreen')}
      />
      <HgButton
        type="success"
        title="PageLayout"
        onPress={() => navigation.navigate('PageLayout')}
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
