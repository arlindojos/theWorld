import React, { useContext } from 'react';
import { World, MainNav } from './styles';
import { Link } from 'react-router-dom';

import AroundWouldImg from '../../styles/images/undraw_Around_the_world_re_n353.svg';
import { AuthContext } from '../../contexts';



const AroundWorld: React.FC = () => {
    const { blackMode } = useContext(AuthContext);
    return (
        <>
            <World>
                <span>
                    Conhecer o mundo nunca foi tão fácil
                </span>
                <img src={AroundWouldImg} alt="Around the World"/>
                
                <MainNav isBlackMode={blackMode}>
                    <span>
                        Temos a lista de todos os países do mundo, estando divididos pelo seus continentes. Da uma olhada.
                    </span>
                        <Link to="/regions">Acessar</Link>
                </MainNav>
            </World>
        </>
    )
}

export default AroundWorld;