import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts';

import Header from '../../components/Header';
import TheWorld from '../../components/TheWorld';
import { Container, Wrapper } from './styles';
import { World, MainNav } from '../../components/AroundWorld/styles';
import AroundWouldImg from '../../styles/images/undraw_Around_the_world_re_n353.svg';


const Home: React.FC = () => {
    const { blackMode } = useContext(AuthContext);

    return (
        <Container isBlackMode={blackMode}>
            <Header />
            <Wrapper>
                <TheWorld MainId="Desktop"/>
                <World>
                    <span>
                        Conhecer o mundo nunca foi tão fácil
                    </span>
                    <img src={AroundWouldImg} alt="Around the World"/> 

                    <TheWorld MainId="Mobile" />
                    <MainNav isBlackMode={blackMode}>
                        <span>
                            Temos a lista de todos os países do mundo, estando divididos pelo seus continentes. Da uma olhada.
                        </span>
                        <Link to="/regions">Acessar</Link>
                    </MainNav>
                    <MainNav isBlackMode={blackMode}>
                        <span>
                            As 13 Linguas mais faladas do munda e seus países
                        </span>
                            <Link to="/languages">Acessar</Link>
                    </MainNav>
                </World>
            </Wrapper>
        </Container>
    )
}

export default Home; 