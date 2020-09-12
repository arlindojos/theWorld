import React, { useContext } from 'react';
import { AuthContext } from '../../contexts';

import Header from '../../components/Header';
import AroundWorld from '../../components/AroundWorld';
import Countries from '../../components/Countries';
import { Container, Wrapper } from '../Home/styles';

const Country: React.FC = () => {
    const { blackMode } = useContext(AuthContext);

    return (
        <Container isBlackMode={blackMode}>
            <Header />
                <Countries MainId="Mobile"/>
            <Wrapper>
                <Countries MainId="Desktop"/>
                <AroundWorld />
            </Wrapper>
        </Container>
    )
}

export default Country; 