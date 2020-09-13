import React from 'react';
import { createContext } from 'react';
import api from '../services/api';
import useLocalStorage from '../hooks/useLocalStorage';

interface CountryProps {
     country: {
        name: string;
        altSpellings: never[];
        region: string;
        population: string;
        languages: {
            name: string;
            nativeName: string;
        }[];
        capital: string;
        borders: string[];
        timezones: string[];
        topLevelDomain: string[];
        flag: string;
        area: string;
        subregion: string;
        nativeName: string;
    };
    newCountry(url: string): void;
    blackMode: boolean;
    setBlackMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const INICIAL_STATE = {
    country: {
      name: '',
      nativeName: '',
      altSpellings: [],
      region: '',
      population: '',
      languages: [
        {name: '',
        nativeName: ''
        }
      ],
      capital: '',
      flag: '',
      area: '',
      subregion: '',
      borders: [],
      timezones: [],
      topLevelDomain: []
  }
}

export const AuthContext =  createContext<CountryProps>({} as CountryProps);

const AuthProvider: React.FC = ({children}) => {
  const [ country, setCountry ] = useLocalStorage('TheWorldCountries', INICIAL_STATE.country);
  const [ blackMode, setBlackMode ] = useLocalStorage('TheWorldBlackMode', false);
  
  const newCountry = (url: string) => {
    api.get(url)
    .then((response) => setCountry(response.data[0]))
    .catch((err) => console.log(err));
  }

  return (
    <AuthContext.Provider value={{ country, newCountry, blackMode, setBlackMode}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;

