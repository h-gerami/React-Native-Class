import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  FlatList,
  Platform,
} from 'react-native';
import {UserList} from '../Common';
const listData = [
  {
    name: 'Hossein',
    id: '1',
    lname: 'Hossein',
    imgSrc: require('../../assets/images/n1.jpg'),
  },
  {
    name: 'Hossein2',
    id: '2',
    lname: 'Hossein',
    imgSrc: require('../../assets/images/n2.jpg'),
  },
  {
    name: 'Hossein3',
    id: '3',
    lname: 'Hossein',
    imgSrc: require('../../assets/images/n3.jpg'),
  },
  {
    name: 'Hossein4',
    id: '4',
    lname: 'Hossein',
    imgSrc: require('../../assets/images/n1.jpg'),
  },
  {
    name: 'Hossein5',
    id: '5s3',
    lname: 'Hossein',
  },
  {
    name: 'Hossein6',
    id: '4s3',
    lname: 'Hossein',
    imgSrc: require('../../assets/images/n1.jpg'),
  },
  {
    name: 'Hossein7',
    id: '5sss3',
    lname: 'Hossein',
  },
  {
    name: 'Hossein6',
    id: '4sdsd3',
    lname: 'Hossein',
  },
  {
    name: 'Hossein723',
    id: '5sssdsds3',
    lname: 'Hossein',
  },
];
const ListScreen = () => {
  const isIos = Platform.OS === 'ios';
  return (
    <View>
      {isIos ? <Text>it is ios</Text> : <Text>it is android</Text>}
      <Text>{isIos ? 'it is ios' : 'it is android'}</Text>
      <FlatList
        data={listData}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <UserList
              imgSource={item.imgSrc}
              name={item.name}
              lastName={item.lname}
            />
          );
        }}
      />
    </View>
  );
};
export default ListScreen;
