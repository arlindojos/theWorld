import React, {useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { Container, StaledCountry } from './styles';
import api from '../../services/api';
import { AuthContext } from '../../contexts';

interface Props {
    url: string;
}

const INICIAL_STATE = [
    {
        name: '',
        altSpellings: []
    }
]

const Searcher: React.FC<Props> = ({url}) => {
    const { newCountry } = useContext(AuthContext);
    const [ countries, setCountries ] = useState(INICIAL_STATE);

   useEffect(() => {
        api.get(url)
        .then(response => setCountries(response.data))
        .catch((err) => console.log(err));

   }, [url]);


    return (
        <Container>
            {
                countries.map((country, index) => {
                    if(index < 15)
                    return <StaledCountry key={index}><Link onClick={e => { newCountry(`/name/${country.name}`) }} to="/country">{country.name}</Link></StaledCountry>

                    return '';
                })
            }
        </Container>
    )
}


export default Searcher;