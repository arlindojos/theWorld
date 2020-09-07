import React from 'react'; 

import { Container, SearchCountry } from './styles';

interface Props {
    MainId?: string;
}

const WhatWeDo: React.FC<Props> = ({MainId}) => {
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
                    <SearchCountry placeholder="Digite o nome do país"/>
                    <i className="fas fa-search"></i>
                </div>
            </Container>
        </>
    )
}

export default WhatWeDo;