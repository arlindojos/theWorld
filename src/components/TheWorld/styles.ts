import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 10rem;

     > #open {
        display: none;
    }

    @media (max-width: 1010px){
        max-width: 40%;
    }

    > #close {
        max-width: 95%;

        > span {
            font-size: 1.6rem;
            font-weight: bold;
        }

        > span + span {
            display: block;
            margin: 5rem 0 0.6rem;
        }

        > i {
            font-size: 18px;
            color: var(--gray);
            position: relative;
            top: 0.2rem;
            left: -3.5rem;
            z-index: 1;
            
            transition: 180ms ease-in-out;
        }
    }

    @media (max-width: 792px){
        max-width: 95%;

        > #close {
            display: none;
            width: auto;
        }

        > #open {
            display: block;
            
            > span {
                font-size: 1.6rem;
                font-weight: bold;
            }

            > span + span {
                display: block;
                margin: 5rem 0 0.6rem;
            }

            > i {
                font-size: 18px;
                color: var(--gray);
                position: relative;
                top: 0.2rem;
                left: -3.5rem;
                z-index: 1;
                
                transition: 180ms ease-in-out;
            }
        }
    }
`;

export const SearchCountry = styled.input`
    width: 70%;
    height: 39px;
    font-size: 14px;
    padding: 0 10px 0 52px; 
    border-radius: 19.5px;
    background: var(--search);
    color: var(--white);
    
    &::placeholder {
        color: var(--gray);
    }
    outline: 0;
    &:focus {
        border: 1px solid var(--twitter);
        ~ i {
            color: var(--twitter);
        }
    }

    @media (max-width: 792px){
    
    }
`;
