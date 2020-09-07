import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import WhatWeDo from '../../components/WhatWeDo';
import { Container, Wrapper, AroundWorld, TryRegion } from './styles';
import AroundWouldImg from '../../styles/images/undraw_Around_the_world_re_n353.svg';


const Home: React.FC = () => {
    return (
        <Container>
            <Header />
            <Wrapper>
                <WhatWeDo MainId="close"/>
                <AroundWorld>
                    <span>
                        Conhecer o mundo nunca foi tão fácil
                    </span>
                    <img src={AroundWouldImg} alt="Around the World"/>

                    <WhatWeDo MainId="open" />
                    <TryRegion>
                        <span>
                            Temos a lista de todos os países do mundo, estando divididos pelo seus continentes. Da uma olhada.
                        </span>
                        <Link to="#">Acessar</Link>
                    </TryRegion>
                </AroundWorld>
            </Wrapper>
        </Container>
    )
}

export default Home; 