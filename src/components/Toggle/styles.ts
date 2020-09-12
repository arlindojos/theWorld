import styled from 'styled-components';


export const Toggle = styled.div`
    display: flex;
    position: unset;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 2rem;

    > span {
        font-size: 1.7rem;
        font-weight: bold;
        line-height: 1.7;
        margin-bottom: 0.8rem;
    }
`;

export const Choice = styled.strong`
    position: absolute;
    font-size: 1.5rem;
    left: 8rem;
    top: 1.0rem;
    cursor: pointer;

    & + strong {
        left: -5.6rem;
    }
`;

export const Switch = styled.label`
    position: relative;
    left: -5rem;
    width: 6.6rem;
    height: 3.6rem;
    margin-bottom: 0.3rem;
`;

export const Checkbox = styled.input`
    margin: 0 0.3rem;
    display: none;

    &:checked + span {
        background: var(--dark);
  
        &:before {
            transform: translateX(3.2rem) rotateZ(53deg);
            background: yellow;
        }
    }
`;

export const Slider  = styled.span`
    position: absolute;
    top: 0; right: 0; left: 0; bottom: 0;
    transition: .5s;

    cursor: pointer;
    background: var(--primary);
    border: 3px solid #fff;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);

    border-radius: 3.5rem;

    &:before {
        position: absolute;
        content: '';
        bottom: 1.4rem;
        top: 0.6rem;
        background: yellow;
        transition: .5s;

        width: 43%;
        height: 48%;
        border-top-left-radius: 5rem;
        border-top-right-radius: 5rem;

        transform: rotateZ(-54deg);
    }

`;


/* 
import styled from 'styled-components';


export const Toggle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 2rem;

    > span {
        font-size: 1.7rem;
        font-weight: bold;
        line-height: 1.7;
        margin-bottom: 0.8rem;
    }
`;

export const Choice = styled.strong`
    position: absolute;
    font-size: 1.5rem;
    right: -5rem;
    top: 1.0rem;
    cursor: pointer;
`;

export const Switch = styled.label`
    position: relative;
    left: -5rem;
    width: 6.6rem;
    height: 3.6rem;
    margin-bottom: 0.3rem
`;

export const Checkbox = styled.input`
    margin: 0 0.3rem;
    display: none;

    &:checked + span {
        background: var(--dark);
  
        &:before {
            transform: translateX(3.2rem) rotateZ(53deg);
            background: yellow;
        }
    }
`;

export const Slider  = styled.span`
    position: absolute;
    top: 0; right: 0; left: 0; bottom: 0;
    transition: .5s;

    cursor: pointer;
    background: #fff;
    border: 3px solid #fff;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);

    border-radius: 3.5rem;

    &:before {
        position: absolute;
        content: '';
        bottom: 1.4rem;
        top: 0.6rem;
        background: var(--gray);
        transition: .5s;

        width: 43%;
        height: 48%;
        border-top-left-radius: 5rem;
        border-top-right-radius: 5rem;

        transform: rotateZ(-54deg);
    }

`; */
