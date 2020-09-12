import styled from 'styled-components';

interface Props {
    isBlackMode: boolean;
}

export const Container = styled.div<Props>`
    background: ${props => props.isBlackMode ? 'var(--dark)' : 'var(--light)'};
`;

export const Wrapper = styled.div`
    margin: 5rem 5rem 0;
    
    height: 100%;
    padding-bottom: 10rem;
    display: flex;
    justify-content: center;
`;
