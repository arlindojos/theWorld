import React, { useContext } from 'react';
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts';

import Header from '../../components/Header';
import { Container, Wrapper } from '../Home/styles';
import { Regions, Europe, MainHeader, Africa, Americas, Asia, Oceania, Countries } from './styles';

interface RegionProps {
    name: string;
}

const Region: React.FC= () => {
    const { newCountry, blackMode } = useContext(AuthContext);
    const europe = useFetch<RegionProps[]>('region/europe');
    const africa = useFetch<RegionProps[]>('region/africa');
    const asia = useFetch<RegionProps[]>('region/asia');
    const americas = useFetch<RegionProps[]>('region/americas');
    const oceania = useFetch<RegionProps[]>('region/oceania');

    return (
        <Container isBlackMode={blackMode}>
            <Header />
            <Wrapper>
                <Regions>
                    <Europe>
                        <MainHeader>Europa</MainHeader>
                        <Countries>
                            {europe.data?.map((country, index) => <Link key={index} 
                            onClick={e => { newCountry(`/name/${country.name}`) }} to="/country">
                                {country.name}
                            </Link>)}
                        </Countries>
                    </Europe>

                    <Africa>
                        <MainHeader>Africa</MainHeader>
                        <Countries>
                            {africa.data?.map((country, index) => <Link 
                                key={index} 
                                onClick={e => { newCountry(`/name/${country.name}`) }} to="/country">
                                    {country.name}
                                </Link>)}
                        </Countries>
                    </Africa>

                    <Americas>
                        <MainHeader>Americas</MainHeader>
                        <Countries>
                            {americas.data?.map((country, index) => <Link 
                            key={index} 
                            onClick={e => { newCountry(`/name/${country.name}`) }} to="/country">
                                {country.name}
                            </Link>)}
                        </Countries>
                    </Americas>

                    <Asia>
                        <MainHeader>Asia</MainHeader>
                        <Countries>
                            {asia.data?.map((country, index) => <Link 
                            key={index} 
                            onClick={e => { newCountry(`/name/${country.name}`) }} to="/country">
                                {country.name}
                            </Link>)}
                        </Countries>
                    </Asia>

                    <Oceania>
                        <MainHeader>Oceania</MainHeader>
                        <Countries>
                            {oceania.data?.map((country, index) => <Link 
                            key={index} 
                            onClick={e => { newCountry(`/name/${country.name}`) }} to="/country">
                                {country.name}
                            </Link>)}
                        </Countries>
                    </Oceania>
                </Regions>
            </Wrapper>
        </Container>
    )
}

export default Region; 