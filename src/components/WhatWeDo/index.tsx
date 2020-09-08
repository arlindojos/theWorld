import React, { useState, useEffect } from 'react'; 

import { Container, SearchCountry } from './styles';
import api from '../../services/api';

interface Props {
    MainId?: string;
}

const WhatWeDo: React.FC<Props> = ({MainId}) => {
    const [ requestCountry, setRequestCountry ] = useState('');
    const [ countries, setCountries ] = useState<object[]>([]);


   useEffect(() => {
        api.get(`/name/${requestCountry}`)
        .then((response => setCountries(response.data)))
        .catch((err) => console.log('Nenhum país com o nome especificado foi encontrado.'));

   }, [ requestCountry]);

   countries.map((country, index) => console.log(country.name))

    return (
        <>
            <Container>
                <div id={MainId}>
                    <span>
                    Nesta Pagina você ira poder conhecer todas as regiões do mundo, países, linguas, Cidades assim como suas culturas.
                    </span>
                    <span>
                        Tem algum país em especial que gostaria de conhecer?
                    </span>
                    <SearchCountry onChange={ e => { setRequestCountry(e.target.value) }} placeholder="Digite o nome do país"/>
                    <i className="fas fa-search"></i>

                    
                </div>
            </Container>
        </>
    )
}

export default WhatWeDo;