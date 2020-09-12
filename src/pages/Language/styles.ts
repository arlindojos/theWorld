import styled from 'styled-components';


export const Languages = styled.div`
  width: 100%;
  margin-bottom: 10rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(9, 200px);

  @media only screen and (max-width: 792px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SearchLanguage = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;

  margin-top: 9rem;

  > span {
    max-width: 40rem;
    font-size: 1.6rem;
    font-weight: bold;
    
    position: absolute;
    top: -7rem;
    right: 10rem;

    > a {
      text-decoration: none;
      color: var(--primary);

      &:hover {
        color: var(--twitter);
      }
    }
  }

  > i {
    font-size: 18px;
    color: var(--gray);
    position: relative;
    top: 1rem;
    right: 25.3rem;
    z-index: 1;
    
    transition: 180ms ease-in-out;
  }
`;

export const Input = styled.input`
  width: 28rem;
  display: block;
  height: 39px;
  font-size: 14px;
  padding: 0 10px 0 52px; 
  border-radius: 19.5px;
  background: var(--search);
  color: var(--white);

  margin-right: 22rem;
  
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
`;

export const MainHeader = styled.h1`
  text-align: center;
`;

export const Countries = styled.span`

  > a {
    display: block;
    text-decoration: none;

    padding: 0 1.4rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary);
  }
`;

export const English = styled.div`
  grid-row-start: 1;
  grid-row-end: 9;

  > span a {
    border-right: 1px solid var(--gray);
  }
`;

export const Portuguese = styled.div`
`;

export const Chinese = styled.div`
  margin-top: 1.4rem;
`;


export const French = styled.div`
  > span a {
    border-right: 1px solid var(--gray);
  }
`;

export const Arabic = styled.div`
  grid-row-start: 3;
  grid-row-end: 6;
`;

export const Japanese = styled.div`
  > span a {
    border-right: 1px solid var(--gray);
  }
`;

export const Latin = styled.div`
  > span a {
    border-right: 1px solid var(--gray);
  }
`;

export const Bengali = styled.div`
  > span a {
    border-right: 1px solid var(--gray);
  }
`;

export const Russian = styled.div``;

export const Samoan = styled.div`
  margin-top: 1.4rem;
`;

export const Hindi = styled.div`
  > span a {
    border-right: 1px solid var(--gray);
  }
`;

export const SpanishCastilian = styled.div`
  grid-row-start: 1;
  grid-row-end: 4;

  > span a {
    border-right: 1px solid var(--gray);
  }
`;

export const PunjabiLahnda = styled.div``;