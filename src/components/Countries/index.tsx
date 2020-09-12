import React, { useContext} from 'react';
import { Container, More, Borders, TimeZone, Domain, Description, Flag, Image } from './styles';

import { AuthContext } from '../../contexts';
import { MainNav } from '../AroundWorld/styles';
import { Link } from 'react-router-dom';


interface Props {
    MainId?: string;
}

const Countries: React.FC<Props> = ({MainId}) => {
    const { blackMode } = useContext(AuthContext);
    
    const { name,flag, altSpellings, region, population, languages, capital, borders, timezones, topLevelDomain, area } = useContext(AuthContext).country;
    if(!name)
    return <Description isBlackMode={blackMode}>Carregando ...</Description>



    const indexNick = altSpellings.length - 1;
    const nickName = altSpellings[indexNick];

    const indexLanguage = languages.length - 1;
    const language = languages[indexLanguage];

    return (
        <Container>
            <div id={MainId}>
                <Flag>
                    <Image src={flag} />
                </Flag>
                <h1>{name}</h1>
                <Description isBlackMode={blackMode}>
                    <span>{name}</span> também conhecido como <span>{nickName}</span>, é um país da região 
                    da <span>{region}</span> com uma população estimada de <span>{population}</span>, a sua capital é <span>{capital}</span>. <br/>
                    Os habitantes de <span>{name}</span> tem como a sua primeira lingua <span>{language.name}/{language.nativeName}</span>.
                </Description>
                <More isBlackMode={blackMode}>
                    <h1>Mais sobre {name}:</h1>
                    <Borders>
                        Fronteiras com { borders.map((border) => <span>, {border}</span>) }
                    </Borders>
                    <Borders>
                        Uma area  <span>{area}</span> quilómetros quadrado
                    </Borders>
                    <TimeZone>
                        Fuso horário{timezones.map((timezone) => <span>{timezone}</span>)}
                    </TimeZone>
                    <Domain>
                        Domínios nativos {topLevelDomain.map((domain) => <span>{domain}</span>)}
                    </Domain>
                </More>
                <MainNav isBlackMode={blackMode}>
                    <span>
                        As 13 Linguas mais faladas do munda e seus países
                    </span>
                        <Link to="/languages">Acessar</Link>
                </MainNav>
            </div>
        </Container>
    )
}


export default Countries;