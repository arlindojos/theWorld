import React, { useState, useContext } from 'react'; 
import { Link } from 'react-router-dom';
import { AuthContext }from '../../contexts';

import { Toggle, Switch, Checkbox, Slider } from '../Toggle/styles';
import { Container, MenuButtons, MobileContent, Browse, DropdownButton, DropdownContent, Economy, Github, BlackMode } from './styles';

const Header: React.FC = () => {
    const { setBlackMode, blackMode } =  useContext(AuthContext);
    const [ active, setActive ] = useState('closeNav');

    const HandleMenu = () => {

        active === 'openNav' ? setActive('closeNav') : setActive('openNav');
    }

   

    return (
        <>
            <Container>
                <Link to="/">The World</Link>
                <MobileContent onClick={HandleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </MobileContent>
                <MenuButtons id={active}>
                    <Browse>
                        <DropdownButton isBlackMode={blackMode }>
                            <i className="fas fa-search"></i>
                            Pesquisas
                            <i className="fas fa-caret-down"></i>
                        </DropdownButton>
                        <DropdownContent isBlackMode={blackMode}>
                            <Link to="/regions">Regiões</Link>
                            <Link to="/">Países</Link>
                            <Link to="/languages">Linguas</Link>
                            <Link to="/">Cidades</Link>
                        </DropdownContent>
                    </Browse>

                    <Economy isBlackMode={blackMode }>
                        <Link to="#">Economia</Link>
                    </Economy>

                    <Github>
                        <a href="https://github.com/arlindojos/theWorld">
                            GitHub <i className="fab fa-github"></i>
                        </a>
                    </Github>
                </MenuButtons>
            </Container>

            <BlackMode>
                <Toggle>
                    <span>Modo escuro</span>
                    <Switch >
                        <Checkbox 
                            type="checkbox" 
                            defaultChecked={blackMode}
                            onChange={e => { setBlackMode(e.target.checked)}}
                        />
                        <Slider id="styles"></Slider>
                    </Switch>
                </Toggle>
            </BlackMode>
        </>
    )
}

export default Header; 