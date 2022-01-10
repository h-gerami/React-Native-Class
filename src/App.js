import React from 'react';
import {Text, SafeAreaView, View, StyleSheet, FlatList} from 'react-native';
const listData = [
  {
    name: 'Hossein',
    id: '1',
  },
  {
    name: 'Hossein2',
    id: '2',
  },
  {
    name: 'Hossein3',
    id: '3',
  },
  {
    name: 'Hossein4',
    id: '4',
  },
];
const App = () => {
  const ttt = 'Hello to first Component';
  function returnText() {
    return 'Hello';
  }
  const textComp = <Text style={styles.textStyle}>{returnText()}</Text>;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.textStyle}>{returnText()}</Text>
      </View>
      <FlatList
        data={listData}
        horizontal
        onEndReached={() => alert(2)}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.container}>
              <Text style={styles.textStyle}>{item.name}</Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    margin: 10,
    padding: 20,
    borderRadius: 10,
  },
  textStyle: {
    color: 'green',
    fontSize: 20,
  },
});
