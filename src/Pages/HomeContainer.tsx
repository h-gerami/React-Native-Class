import React from 'react';
import {LanguageContextProvider} from '../Context/LanguageContext';
import HomeScreen from './HomeScreen';
const HomeContainer = ({navigation}: any) => {
  return (
    <LanguageContextProvider>
      <HomeScreen navigation={navigation} />
    </LanguageContextProvider>
  );
};
export default HomeContainer;
