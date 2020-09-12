import styled from 'styled-components';


export const Regions = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media only screen and (max-width: 792px) {
        grid-template-columns: 1fr 1fr;
        
        > div span {
            width: 100%;
            padding-right: 0;
        }

        @media only screen and (max-width: 500px) {
            grid-template: auto;
            display: block;
            flex-shrink: 0;

            > div span {
                width: 100%;
                padding: 0;
                border: none;
            }
        }
    }



    > div {
        width: 30vw;
        display: flex;
        flex-direction: column;
    }
`;

export const Countries = styled.span`
    padding: 0 1.4rem;
    margin-bottom: 1rem;

    > a {
        display: block;
        text-decoration: none;
        color: var(--primary);
        font-weight: bold;
        
        font-size: 1.6rem;
        line-height: 1.6;
    }
`;

export const Europe = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MainHeader = styled.h1`
    text-align: center;
`;

export const Africa = styled.div`
    > span {
        border-right: 1px solid var(--gray);
        border-left: 1px solid var(--gray);

        @media only screen and (max-width: 792px) {
            border-right: none;
            grid-template-columns: 1fr 1fr;
        }
    }
`;

export const Americas = styled.div`
    
`;

export const Asia = styled.div`
    @media only screen and (max-width: 792px) {
        > span {
            border-left: 1px solid var(--gray);
        };
    }
`;
export const Oceania  = styled.div`
    > span {
        border-right: 1px solid var(--gray);
        border-left: 1px solid var(--gray);
        height: 100%;
    }
`;