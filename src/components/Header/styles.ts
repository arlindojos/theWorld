import styled from 'styled-components';

interface Props {
    isBlackMode: boolean;
}

export const Container = styled.div`
    width: 100%;
    height: 6.3rem;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;

    border-bottom: 0.1rem solid var(--outline-light);

    > a {
        font-size: 2.2rem;
        margin-left: 5rem;
        color: var(--primary);
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        text-decoration: none;
    }

    @media (max-width: 792px) {
        > #closeNav {
            display: none;
        }

        > #openNav {
            display: block;
        }
    }   
`;

export const MenuButtons = styled.ul`
    position: relative;
    font-weight: bold;
    font-size: 1.6rem;
    list-style: none;

    @media (max-width: 792px) {
        position: absolute;
        top: 6rem;
        width: 100%;

        background: var(--gray);

        z-index: 1;

        > li {
            display: flex;
            flex-direction: column;
            line-height: 300%;

            font-size: 1.7rem;

            &:nth-child(2) {
                > a {
                    margin: 0 2rem;
                }
            }

            &:last-child {
                > a {
                    background: transparent;
                    padding: 0;
                    color: var(--dark);

                    margin: 0 2rem;

                    > i {
                        color: var(--dark);
                    }
                }
            }
        }
    }
`;

export const Browse = styled.li`
    position: relative;
    display: inline-block;
    margin: 0 2.8rem;
    font-size: 1.7rem;

    &:hover div {
        display: block;
    }
`;

export const Economy = styled.li<Props>`
    display: inline-block;
    margin: 0 2.8rem;
    
    > a {
        text-decoration: none;
        color: ${props => props.isBlackMode ? 'var(--light)' : 'var(--dark)'};

        &:hover, &:active { 
            color: var(--primary);
        }
    }
`;

export const Github = styled.li`
    display: inline-block;
    margin-left: 2.8rem;
    margin-right: 5rem;

    > a {
        text-decoration: none;
        padding: 1.0rem 2.7rem;
        border-radius: 10rem;
        background: var(--dark);
        color: var(--light);

        > i {
            color: var(--light);
        }

        &:hover, &:active {
            background: var(--primary);
        }
    }
`;

export const DropdownButton = styled.a<Props>`
    cursor: pointer;
    animation-name: BorderAnim;
    animation-fill-mode: forwards;
    animation-duration: 1s;
    animation-timing-function: ease-out;
    color: ${props => props.isBlackMode ? 'var(--light)' : 'var(--dark)'};
    
    > i {
        margin-right: 0.6rem;
        color: var(--primary);
    }

    > i + i {
        margin-left: 0.5rem;
    }
    

    &:hover, &:active { 
        color: var(--primary);
    }
`;

export const DropdownContent = styled.div<Props>`
    display: none;
    position: absolute;
    left: 1.2rem;
    top: 2.4rem;

    background-color: ${props => props.isBlackMode ? 'var(--gray)' : '#f9f9f9'};
    box-shadow: 0px 8px 16px 0px var(--box-shadow);
    padding: 0.8rem 0;
    z-index: 1;
    
    > a {
        display: flex;
        align-content: column;

        text-decoration: none;
        margin-bottom: 0.8rem;
        padding: 0.3rem 3.8rem 0.3rem 1.6rem;
        
        &:hover {
            background: var(--primary);
        }
    }
`;

export const MobileContent = styled.div`
    position: absolute;
    right: 5%;
    width: 39px;
    cursor: pointer;
    display: none;

    @media (max-width: 792px) {
        display: block;
        border-radius: 0.8rem;

        > div {
            border: 2px solid var(--dark);
            border-radius: 20rem;
            margin: 0.8rem 0.2rem;
        }

        &:hover {
            background: var(--gray);
        }
    }
`;

export const BlackMode = styled.div`
    position: absolute;
    top: 4rem;
    left: 83%;
    z-index: 1;

    > div label {
        > input:checked + #styles {
            background: var(--dark);
            
            &:before {
                background: yellow;
            }
        }

        > #styles {
            background: #fff;

            &:before {
                background: var(--gray)
            }
        }
    }

    @media only screen and (min-width: 1015px) {
        left: 90%;
    }

    @media only screen and (max-width: 605px) {
        top: 6rem;
        > div > span {
            display: none;
        }
    }

    > div label {
        left: -2.3rem;
        top: -1rem;
    }
`;