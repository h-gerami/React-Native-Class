import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {HgButton} from '../Common';
import {CColor} from '../Global/Style';
const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <HgButton title="Increase" onPress={() => setCounter(counter + 1)} />
      <HgButton title="Decrease" onPress={() => setCounter(counter - 1)} />
      <Text style={styles.text}>Counter: {counter}</Text>
    </View>
  );
};
const color = CColor.red;
export default CounterScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: color,
  },
});
