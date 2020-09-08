import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import TheWorld from '../../components/TheWorld';
import { Container, Wrapper } from './styles';
import { World, TryRegion } from '../../components/AroundWorld/styles';
import AroundWouldImg from '../../styles/images/undraw_Around_the_world_re_n353.svg';


const Home: React.FC = () => {
    return (
        <Container>
            <Header />
            <Wrapper>
                <TheWorld MainId="close"/>
                <World>
                    <span>
                        Conhecer o mundo nunca foi tão fácil
                    </span>
                    <img src={AroundWouldImg} alt="Around the World"/>

                    <TheWorld MainId="open" />
                    <TryRegion>
                        <span>
                            Temos a lista de todos os países do mundo, estando divididos pelo seus continentes. Da uma olhada.
                        </span>
                        <Link to="#">Acessar</Link>
                    </TryRegion>
                </World>
            </Wrapper>
        </Container>
    )
}

export default Home; 