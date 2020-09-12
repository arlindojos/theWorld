import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';

import { Container, MenuButtons, MobileContent, Browse, DropdownButton, DropdownContent, Economy, Github } from './styles';

const Header: React.FC = () => {
    const [ active, setActive ] = useState('closeNav');

    const HandleMenu = () => {

        active === 'openNav' ? setActive('closeNav') : setActive('openNav');
    }

    return (
        <Container>
            <Link to="/">The World</Link>
            <MobileContent onClick={HandleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </MobileContent>
            <MenuButtons id={active}>
                <Browse>
                    <DropdownButton>
                        <i className="fas fa-search"></i>
                        Pesquisas
                        <i className="fas fa-caret-down"></i>
                    </DropdownButton>
                    <DropdownContent>
                        <Link to="/regions">Regiões</Link>
                        <Link to="#theWorld">Países</Link>
                        <Link to="/languages">Linguas</Link>
                        <Link to="#theWorld">Cidades</Link>
                    </DropdownContent>
                </Browse>

                <Economy>
                    <Link to="#">Economia</Link>
                </Economy>

                <Github>
                    <a href="https://github.com/arlindojos/theWorld">
                        GitHub <i className="fab fa-github"></i>
                    </a>
                </Github>
            </MenuButtons>
        </Container>
    )
}

export default Header; 