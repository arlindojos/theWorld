import React, { useState } from 'react'; 

import { Container, SearchCountry } from './styles';
import Searcher from '../Searcher';

interface Props {
    MainId?: string;
}

const TheWorld: React.FC<Props> = ({MainId}) => {
    const [ requestCountry, setRequestCountry ] = useState('');

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

                <Searcher requestCountry={ requestCountry } />
            </Container>
        </>
    )
}

export default TheWorld;