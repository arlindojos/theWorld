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
        borders: string[],
        timezones: string[],
        topLevelDomain: string[]
    };
    newCountry(name: string): void;
}

const INICIAL_STATE = {
    country: {
      name: '',
      altSpellings: [],
      region: '',
      population: '',
      languages: [
        {name: '',
        nativeName: ''
      }
    ],
    capital: '',
    borders: [],
    timezones: [],
    topLevelDomain: []
  }
}

export const AuthContext =  createContext<CountryProps>({} as CountryProps);

const AuthProvider: React.FC = ({children}) => {
  const [ country, setCountry ] = useLocalStorage('countries', INICIAL_STATE.country)
  
  const newCountry = (name: string) => {
    api.get(`/name/${name}`)
    .then((response) => setCountry(response.data[0]))
    .catch((err) => console.log(err));
  }

  return (
    <AuthContext.Provider value={{country, newCountry}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;

