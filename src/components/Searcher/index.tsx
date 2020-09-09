import React, {useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Container, StaledCountry } from './styles';
import api from '../../services/api';

interface Props {
    requestCountry: string;
}

const INICIAL_STATE = [
    {
        name: '',
    }
]

const Searcher: React.FC<Props> = ({requestCountry}) => {
    const dispatch = useDispatch();
    const [ countries, setCountries ] = useState(INICIAL_STATE);
    const [ newCountry, setNewCountry ] = useState('');

   useEffect(() => {
        api.get(`/name/${requestCountry}`)
        .then((response => setCountries(response.data)))
        .catch((err) => console.log(err));

   }, [ requestCountry]);

   // save data to Global state
   useCallback(() => {
        api.get(`/name/${newCountry}`)
        .then((response => setCountries(response.data)))
        .catch((err) => console.log(err));

       dispatch({ type: 'STORE_COUNTRY', country: countries[0]})
   }, [newCountry, dispatch, countries] )
   //

    return (
        <Container>
            {
                countries.map((country, index) => {
                    if(index < 15)
                    return <StaledCountry key={index}><Link to="/country" onClick={ e => { setNewCountry(country.name)} }>{country.name}</Link></StaledCountry>

                    return '';
                })
            }
        </Container>
    )
}


export default Searcher;