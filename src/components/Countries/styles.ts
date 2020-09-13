import styled from 'styled-components';

interface Props {
    isBlackMode: boolean;
}

export const Container = styled.div`
    #Desktop {
        width: 85%;
        margin-top: 2rem;
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

export const Description = styled.p<Props>`
    font-size: 1.6rem;
    font-weight: bold;
    line-height: 1.5;
    

    > span {
        font-style: italic;
        color: ${props => props.isBlackMode ? 'var(--light)' : 'var(--primary)'};
    }
`;
export const More = styled.ul<Props>`
    margin-bottom: 4rem;

    > h1 {
        font-size: 1.8rem;
        line-height: 1.6
    }

    > li span {
        font-style: italic;
        color: ${props => props.isBlackMode ? 'var(--light)' : 'var(--primary)'};
    }
    
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 3rem;
    margin-left: 2rem;
    line-height: 1.6;
`;
export const Flag = styled.div``;
export const Image = styled.img`
    max-width: 20rem;

    @media only screen and (max-width: 500px) {
        max-width: 10rem;
    }
`;

export const CSVDownload = styled.div`
    text-align: right;
    margin-right: 6rem;
`;

export const Button = styled.button`
    color: #D95284;
    background: #03588C;
    font-size: 1.6rem;
    font-weight: bold;
    border: none;
    
    padding: 1.1rem 1.3rem;
    border-radius: .3rem;

    cursor: pointer;

    &:hover, &:active {
        opacity: .8;
    }
`;


export const Borders = styled.li``;
export const TimeZone = styled.li``;
export const Domain = styled.li``;
