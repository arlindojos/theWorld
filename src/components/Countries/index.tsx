import React, { useContext } from 'react';
import { Container, More, Borders, TimeZone, Domain, Description } from './styles';

import { AuthContext } from '../../contexts';


interface Props {
    MainId?: string;
}

const Countries: React.FC<Props> = ({MainId}) => {
    const { name, altSpellings, region, population, languages, capital, borders, timezones, topLevelDomain } = useContext(AuthContext).country;
    if(!name)
    return <Description>Carregando ...</Description>


    const indexNick = altSpellings.length - 1;
    const nickName = altSpellings[indexNick];

    const indexLanguage = languages.length - 1;
    const language = languages[indexLanguage];

    return (
        <Container>
            <div id={MainId}>
                <h1>{name}</h1>
                <Description>
                    <span>{name}</span> também conhecido como <span>{nickName}</span>, é um país da região 
                    da <span>{region}</span> com uma população estimada de <span>{population}</span>, a sua capital é <span>{capital}</span>. <br/>
                    Os habitantes de <span>{name}</span> tem como a sua primeira lingua <span>{language.name}/{language.nativeName}</span>.
                </Description>
                <More>
                    <h1>Mais sobre {name}:</h1>
                    <Borders>
                        nteiras com { borders.map((border) => <span>, {border}</span>) }
                    </Borders>
                    <TimeZone>
                        Timezones {timezones.map((timezone) => <span>{timezone}</span>)}
                    </TimeZone>
                    <Domain>
                        Domínios nativos {topLevelDomain.map((domain) => <span>{domain}</span>)}
                    </Domain>
                </More>
            </div>
        </Container>
    )
}


export default Countries;