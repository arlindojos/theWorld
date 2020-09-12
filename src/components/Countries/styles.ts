import styled from 'styled-components';


export const Container = styled.div`
    #Desktop {
        width: 85%;
        margin-top: 10rem;
        display: block;

        > h1 {
            text-align: center;
            font-size: 2.4rem;
        }

        @media only screen and (max-width: 792px){
            display: none;
        }
    }

    #Mobile {
        display: block;
        margin: 5rem;

        @media only screen and (min-width: 792px){
            display: none;
        }

        @media only screen and (max-width: 500px){
            margin: 3rem 1.2rem;
        }
    }
`;

export const Description = styled.p`
    font-size: 1.6rem;
    font-weight: bold;
    line-height: 1.5;

    > span {
        font-style: italic;
        color: var(--primary);
    }
`;
export const More = styled.ul`
    margin-bottom: 7rem;

    > h1 {
        font-size: 1.8rem;
        line-height: 1.6
    }

    > li span {
        font-style: italic;
        color: var(--primary);
    }
    
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 3rem;
    margin-left: 2rem;
    line-height: 1.6;
`;

export const Borders = styled.li``;
export const TimeZone = styled.li``;
export const Domain = styled.li``;