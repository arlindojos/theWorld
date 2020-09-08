import React, {useState, useEffect } from 'react';
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

   useEffect(() => {
        api.get(`/name/${requestCountry}`)
        .then((response => setCountries(response.data)))
        .catch((err) => 'Nenhum país com o nome especificado foi encontrado.');

   }, [ requestCountry]);

   dispatch({ type: 'STORE_COUNTRY', country: countries[0] });

    return (
        <Container>
            {
                countries.map((country, index) => {
                    if(index < 15)
                    return <StaledCountry key={index}><Link to="/country" onClick={e => { setCountries([country])} }>{country.name}</Link></StaledCountry>
                })
            }
        </Container>
    )
}


export default Searcher;