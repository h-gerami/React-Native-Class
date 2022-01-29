import React from 'react';
import {LanguageContextProvider} from '../../Context/LanguageContext';
import LoginScreen from './LoginScreen';
const LoginContainer = () => {
  return (
    <LanguageContextProvider>
      <LoginScreen />
    </LanguageContextProvider>
  );
};
export default LoginContainer;
