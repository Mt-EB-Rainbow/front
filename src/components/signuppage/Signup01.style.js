import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

export const H3 = styled.div`
    font-size: 1.8vh;
    font-weight: 600;
    margin-bottom: 0.9vh;
    display: flex;
    justify-content: start;
    width: 40.4vw;
`;

export const GrayBox = styled.div`
    background-color: var(--pale-gray);
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: calc(40.4vw - 2vw);
    height: calc(3.7vh - 2vh);
    border-radius: 0.6vh;
    margin-bottom: 0.9vh;
    padding: 1vh 1vw 1vh 1vw;
`;

export const BoxLeftText = styled.span`
    font-size: 1.5vh;
    font-weight: 300;
`;
export const BoxRightText = styled.div`
    font-size: 1.5vh;
    font-weight: 300;
    color: var(--dark-gray);
`;
