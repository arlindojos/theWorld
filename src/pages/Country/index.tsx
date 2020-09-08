import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../../components/Header';
import AroundWorld from '../../components/AroundWorld';
import { Container, Wrapper } from '../Home/styles';
import { Countries } from './styles';


const Country: React.FC = () => {
    const { country }: any = useSelector(state => state);

    const { name } = country.country;


    return (
        <Container>
            <Header />
            <Countries>
                <h1>{name}</h1>
            </Countries>
            <Wrapper>
                <AroundWorld />
            </Wrapper>
        </Container>
    )
}

export default Country; 