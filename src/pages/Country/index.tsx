import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../../components/Header';
import AroundWorld from '../../components/AroundWorld';
import { Container, Wrapper } from '../Home/styles';
import { Countries, Description, More } from './styles';

const Country: React.FC = () => {
    const { data }: any = useSelector(state => state);

    console.log(data.country);
    const { name, altSpellings, region, population, languages, capital } = data.country;

    const indexNick = altSpellings.length - 1;
    const nickName = altSpellings[indexNick];

    const indexLanguage = languages.length - 1;
    const language = languages[indexLanguage];

    return (
        <Container>
            <Header />
            <Wrapper>
                <Countries>
                    <h1>{name}</h1>
                    <Description>
                        <span>{name}</span> também conhecido como <span>{nickName}</span>, é um país da região 
                        da <span>{region}</span> com uma população estimada de <span>{population}</span>, a sua capital é <span>{capital}</span>. <br/>
                        Os habitantes de <span>{name}</span> tem como a sua primeira lingua <span>{language.name}/{language.nativeName}</span>.
                    </Description>
                    <More>
                        
                    </More>
                </Countries>
                <AroundWorld />
            </Wrapper>
        </Container>
    )
}

export default Country; 