import React from 'react';
import { Container, Switch, Checkbox, Slider, Choice } from './styles';


const Toggle: React.FC = () => {
    return (
        <Container>
            <span>Pesquisar pelo:</span>
            <Switch>
                <Checkbox type="checkbox" />
                <Slider></Slider>
                <Choice>País</Choice>
            </Switch>
            <Switch>
                <Checkbox type="checkbox" />
                <Slider></Slider>
                <Choice>Capital</Choice>
            </Switch>
        </Container>
    )
}

export default Toggle;