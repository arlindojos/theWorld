import React from 'react';
import { World, TryRegion } from './styles';
import { Link } from 'react-router-dom';

import AroundWouldImg from '../../styles/images/undraw_Around_the_world_re_n353.svg';



const AroundWorld: React.FC = () => {
    return (
        <>
            <World>
                <span>
                    Conhecer o mundo nunca foi tão fácil
                </span>
                <img src={AroundWouldImg} alt="Around the World"/>
                
                <TryRegion>
                    <span>
                        Temos a lista de todos os países do mundo, estando divididos pelo seus continentes. Da uma olhada.
                    </span>
                        <Link to="#">Acessar</Link>
                </TryRegion>
            </World>
        </>
    )
}

export default AroundWorld;