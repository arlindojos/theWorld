import React, { useContext, useState } from 'react';
import useFetch from '../../hooks/useFetch';

import Header from '../../components/Header';
import { Container, Wrapper } from '../Home/styles';
import { AuthContext } from '../../contexts';
import { Link } from 'react-router-dom';
import { Languages, SearchLanguage, Input, MainHeader, Countries, English, Portuguese, Chinese, French, Arabic, Japanese, Latin, Bengali, Russian, Samoan, Hindi, SpanishCastilian, PunjabiLahnda } from './styles';

interface LanguageProps {
    name: string;
}

const Language: React.FC = () => {
    const [ language, setLanguage ] = useState('es');
    const [ languageTitle, setLanguageTitle ] = useState('Espanhol, Castelhiano')

    const { newCountry } = useContext(AuthContext);
    const english = useFetch<LanguageProps[]>('lang/en');
    const portuguese = useFetch<LanguageProps[]>('lang/pt');
    const chinese =  useFetch<LanguageProps[]>('lang/zh');
    const french = useFetch<LanguageProps[]>('lang/zh');
    const arabic = useFetch<LanguageProps[]>('lang/ar');
    const japanese = useFetch<LanguageProps[]>('lang/ja'); 
    const latin = useFetch<LanguageProps[]>('lang/la');
    const bengali = useFetch<LanguageProps[]>('lang/bn');
    const russian = useFetch<LanguageProps[]>('lang/ru');
    const samoan = useFetch<LanguageProps[]>('lang/sm');
    const hindi = useFetch<LanguageProps[]>('lang/hi');
    const punjabiLahnda =  useFetch<LanguageProps[]>('lang/pa');

    const spanishAndUserRequestLanguage = useFetch<LanguageProps[]>(`lang/${language}`);

    console.log(spanishAndUserRequestLanguage.data);


    return (
        <Container>
            <Header />

            <SearchLanguage>
                <span>
                    Faça pesquisa de uma lingua e saiba quais são os países falantes da lingua e sobre os países <br/>
                    (use <a target="_blank" href="https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes">código ISO 639-1</a> para a pesquisa)
                </span>
                <Input 
                    onChange={e => {
                        setLanguage(e.target.value)
                        setLanguageTitle('Resultado da sua pesquisa')
                    }} 
                    placeholder="Digite o código ISO 639-1" />
                <i className="fas fa-search"></i>
            </SearchLanguage>

            <Wrapper>
                <Languages>
                    <English>
                        <MainHeader>Inglês</MainHeader>
                        <Countries>
                            {english.data?.map((country, index) => <Link 
                            key={index} 
                            onClick={e => { newCountry(`/name/${country.name}`) }} to="/country">
                                {country.name}
                            </Link>)}
                        </Countries>
                    </English>
                    <Portuguese>
                        <MainHeader>Português</MainHeader>
                        <Countries>
                            {portuguese.data?.map((country, index) => <Link 
                            key={index} 
                            onClick={e => { newCountry(`/name/${country.name}`) }} to="/country">
                                {country.name}
                            </Link>)}
                        </Countries>
                    </Portuguese>
                    <SpanishCastilian>
                        <MainHeader>{languageTitle}</MainHeader>
                        <Countries>
                            {spanishAndUserRequestLanguage.data?.map((country, index) => <Link 
                            key={index} 
                            onClick={e => { newCountry(`/name/${country.name}`) }} to="/country">
                                {country.name}
                            </Link>)}
                        </Countries>
                    </SpanishCastilian>
                    <Chinese>
                        <MainHeader>Chinês</MainHeader>
                        <Countries>
                            {chinese.data?.map((country, index) => <Link 
                            key={index} 
                            onClick={e => { newCountry(`/name/${country.name}`) }} to="/country">
                                {country.name}
                            </Link>)}
                        </Countries>
                    </Chinese>
                    <French>
                        <MainHeader>Francês</MainHeader>
                        <Countries>
                            {french.data?.map((country, index) => <Link 
                            key={index} 
                            onClick={e => { newCountry(`/name/${country.name}`) }} to="/country">
                                {country.name}
                            </Link>)}
                        </Countries>
                    </French>
                    <Japanese>
                        <MainHeader>Japonês</MainHeader>
                        <Countries>
                            {japanese.data?.map((country, index) => <Link 
                            key={index} 
                            onClick={e => { newCountry(`/name/${country.name}`) }} to="/country">
                                {country.name}
                            </Link>)}
                        </Countries>
                    </Japanese>
                    <Arabic>
                        <MainHeader>Árabe</MainHeader>
                        <Countries>
                            {arabic.data?.map((country, index) => <Link 
                            key={index} 
                            onClick={e => { newCountry(`/name/${country.name}`) }} to="/country">
                                {country.name}
                            </Link>)}
                        </Countries>
                    </Arabic>
                    <Latin>
                        <MainHeader>Latin</MainHeader>
                        <Countries>
                            {latin.data?.map((country, index) => <Link 
                            key={index} 
                            onClick={e => { newCountry(`/name/${country.name}`) }} to="/country">
                                {country.name}
                            </Link>)}
                        </Countries>
                    </Latin>
                    <Russian>
                        <MainHeader>Russo</MainHeader>
                        <Countries>
                            {russian.data?.map((country, index) => <Link 
                            key={index} 
                            onClick={e => { newCountry(`/name/${country.name}`) }} to="/country">
                                {country.name}
                            </Link>)}
                        </Countries>
                    </Russian>
                    <Bengali>
                        <MainHeader>Bengali</MainHeader>
                        <Countries>
                            {bengali.data?.map((country, index) => <Link 
                            key={index} 
                            onClick={e => { newCountry(`/name/${country.name}`) }} to="/country">
                                {country.name}
                            </Link>)}
                        </Countries>
                    </Bengali>
                    <Samoan>
                        <MainHeader>Samoa</MainHeader>
                        <Countries>
                            {samoan.data?.map((country, index) => <Link 
                            key={index} 
                            onClick={e => { newCountry(`/name/${country.name}`) }} to="/country">
                                {country.name}
                            </Link>)}
                        </Countries>
                    </Samoan>
                    <Hindi>
                        <MainHeader>Hindi</MainHeader>
                        <Countries>
                            {hindi.data?.map((country, index) => <Link 
                            key={index} 
                            onClick={e => { newCountry(`/name/${country.name}`) }} to="/country">
                                {country.name}
                            </Link>)}
                        </Countries>
                    </Hindi>
                    <PunjabiLahnda>
                        <MainHeader>Punjabi/Lahnda</MainHeader>
                        <Countries>
                            {punjabiLahnda.data?.map((country, index) => <Link 
                            key={index} 
                            onClick={e => { newCountry(`/name/${country.name}`) }} to="/country">
                                {country.name}
                            </Link>)}
                        </Countries>
                    </PunjabiLahnda>
                </Languages>
            </Wrapper>
        </Container>          
    )
}

export default Language;