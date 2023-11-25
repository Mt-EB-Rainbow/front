import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

export const Text = styled.div`
    font-weight: 600;
    margin-bottom: 4.5rem;
    white-space: pre-wrap;
    text-align: center;
    color: var(--Black, #333);
    text-align: center;

    font-size: 1.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const BtnWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 22rem;
    justify-content: space-between;
`;

export const GrayBtn = styled.button`
    color: var(--Gray, #999);
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border: 1px solid var(--gray);
    font-size: 1rem;
    border-radius: 5rem;
    font-family: var(--korean);
    padding: 0.75rem 1.6rem;
    background-color: white;
    margin-bottom: 1.8vh;
    cursor: pointer;
`;
