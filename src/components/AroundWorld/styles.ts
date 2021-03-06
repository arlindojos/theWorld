import styled from 'styled-components';

interface Props {
    isBlackMode: boolean;
}

export const World = styled.div`
    position: relative;
    display: inline-block;

    > span {
        position: absolute;
        top: 4rem;
        max-width: 30rem;

        font-size: 2.4rem;
        font-weight: bold;
    }

    > img {
        width: 100%;
    }
`;

export const MainNav = styled.div<Props>`
    margin-top: 4rem;
    font-size: 1.6rem;
    font-weight: bold;
    

    >  a {
        display: block;
        text-align: center;
        line-height: 3.9rem;


        text-decoration: none;
        width: 30%;
        height: 3.9rem;
        border: ${props => props.isBlackMode ? '1px solid var(--primary)' : 'none'};
        border-radius: 1rem;
        
        margin-top: 0.6rem;
        background: var(--dark);
        color: var(--white);

        &:hover {
            background: var(--primary);
        }
    }
`;