import React, {createContext, useState} from 'react';
import {LanguageEnum} from '../utils/types';
interface LanguageContextType {
  language: string;
  setLanguage: (v: LanguageEnum) => void;
}
export const LanguageContext = createContext({} as LanguageContextType);
interface LanguageContextProviderType {
  children: React.ReactNode;
}
export const LanguageContextProvider = (props: LanguageContextProviderType) => {
  const {children} = props;
  const [language, setLanguage] = useState<LanguageEnum>(LanguageEnum.de);
  return (
    <LanguageContext.Provider value={{language, setLanguage}}>
      {children}
    </LanguageContext.Provider>
  );
};
