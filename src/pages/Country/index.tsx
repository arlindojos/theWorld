import React from 'react';

import Header from '../../components/Header';
import AroundWorld from '../../components/AroundWorld';
import Countries from '../../components/Countries';
import { Container, Wrapper } from '../Home/styles';

const Country: React.FC = () => {
    return (
        <Container>
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