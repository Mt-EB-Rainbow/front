import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

export const Text = styled.div`
    font-size: 2.2vh;
    font-weight: 600;
    margin-bottom: 3.7vh;
`;

export const BtnWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 5vh;
    width: 31vw;
    justify-content: space-between;
`;

export const GrayBtn = styled.button`
    width: 10.75rem;
    height: 2.7rem;
    color: var(--dark-gray);
    padding: 1.4vh 2vw 1.4vh 2vw;
    border: 0.1em solid var(--gray);
    font-size: 1rem;
    font-weight: 500;
    border-radius: 90vh;
    font-family: var(--korean);
    font-weight: 600;
    background-color: white;
    margin-bottom: 1.8vh;
    cursor: pointer;
`;
