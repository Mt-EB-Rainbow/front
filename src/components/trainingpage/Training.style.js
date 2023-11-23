import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    width: 59.7rem;
`;

export const Box = styled.div`
    display: flex;
    width: 59.7rem;
    height: 15.5vh;
    background-color: var(--pale-green);
    justify-content: center;
    align-items: center;
    border-radius: 2.2vh;
    margin: 12.4vh 0 5.2vh;
`;

export const InlineBox = styled.div`
    width: 59.7rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 2rem;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Board = styled.div`
    width: 59.7rem;
    display: flex;
    flex-direction: column;
`;

export const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 6vh;
`;

export const CardBox = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-right: 1.5rem;
    margin-bottom: 1.8rem;

    &:nth-child(4n) {
        margin-right: 0;
    }
`;

export const Footer = styled.div``;
