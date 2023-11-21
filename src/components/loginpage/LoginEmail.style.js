import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

export const Text = styled.div`
    font-size: 1.5vh;
    font-family: var(--korean);
    color: var(--dark-gray);
    margin-bottom: 0.5vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
`;

export const InputEmail = styled.input`
    width: 26.25vw;
    height: 5vh;
    box-sizing: border-box;
    padding: 1.5vh;
    border-radius: 1.1vh;
    border: 0.1em solid var(--gray);
    font-size: 1.6vh;
    font-weight: 400;
    outline: none;
    color: #3c3d40;
`;

export const InputWrapper = styled.div`
    margin-bottom: 3.7vh;
    width: 26.25vw;
    margin-top: 3.7vh;
`;
