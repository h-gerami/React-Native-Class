import React from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {HgButton, UserList} from '../Common';

function HomeScreen(props) {
  const {navigation} = props;
  //   console.log(props);
  //   const test = {
  //     name: 'hossein',
  //     lastName: 'gerami',
  //   };
  //   console.log(test.name);
  //   const {name} = test;
  //   console.log(name, 'destr');
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      {/* <Button
        title="go to List Screen"
        onPress={() => navigation.navigate('ListScreen')}
      /> */}
      <HgButton
        type="danger"
        title="Press Me :)"
        onPress={() => navigation.navigate('CounterScreen')}
      />
    </View>
  );
}
export default HomeScreen;
const styles = StyleSheet.create({
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
