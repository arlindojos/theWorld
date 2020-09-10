import React, { useState, useEffect } from 'react'; 

import { Container, SearchCountry,SearchBy } from './styles';
import { Toggle, Switch, Checkbox, Slider, Choice } from '../Toggle/styles';
import Searcher from '../Searcher';

interface Props {
    MainId?: string;
}

const TheWorld: React.FC<Props> = ({MainId}) => {
    const [ requestCountry, setRequestCountry ] = useState('');

    const [ placeholder, setPlaceholder ] = useState('');
    const [ legend, setLegend ] = useState('');
    const [ legendStyles, setLegendStyles] = useState({color: ''});
    const [ checked, setChecked ] = useState(true);
    const [ url, setUrl ] = useState(`/name/${requestCountry}`);

 
    useEffect(() => {
        if(checked === true) {
            setPlaceholder('Digite o nome do país')
            setLegend('Faça a sua pesquisa usando o nome do país')
            setLegendStyles({color: 'var(--dark)'})
            setUrl(`/name/${requestCountry}`)
        } else {
            setPlaceholder('Digite o nome da cidade capital')
            setLegend('Faça a sua pesquisa usando a cidade capital')
            setLegendStyles({color: 'var(--primary)'})
            setUrl(`/capital/${requestCountry}`)
        }
    }, [checked, requestCountry])


    return (
        <>
            <Container id="theWorld">
                <div id={MainId}>
                    <span>
                        Nesta Pagina você ira poder conhecer todas as regiões do mundo, países, linguas, Cidades assim como suas culturas.
                    </span>

                    <Toggle>
                        <span>Pesquisar pelo:</span>
                        <Switch >
                            <Checkbox 
                                defaultChecked
                                type="checkbox" 
                                onChange={e => { setChecked(e.target.checked)}}
                            />
                            <Slider></Slider>
                            <Choice>País</Choice>
                            <Choice>Capital</Choice>
                        </Switch>
                    </Toggle>

                    <SearchBy style={legendStyles}>
                       {legend}
                    </SearchBy>

                    <SearchCountry 
                        onChange={ e => { setRequestCountry(e.target.value) }} 
                        placeholder={placeholder}
                    />

                    <i className="fas fa-search"></i>
                </div>

                <Searcher url={ url } />
            </Container>
        </>
    )
}

export default TheWorld;