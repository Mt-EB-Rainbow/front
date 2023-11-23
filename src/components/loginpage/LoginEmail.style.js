import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

export const Box = styled.div`
    width: 19rem;
`;

export const Text = styled.div`
    width: 100%;
    font-size: 1.5vh;
    font-family: var(--korean);
    color: var(--dark-gray);
    margin-bottom: 0.5vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
`;

export const InputEmail = styled.input`
    width: 100%;
    height: 2.7rem;
    box-sizing: border-box;
    padding: 0.8rem 0.75rem;
    border-radius: 0.6rem;
    border: 0.1em solid var(--gray);
    font-size: 1.6vh;
    font-weight: 400;
    outline: none;
    color: #3c3d40;
`;

export const InputWrapper = styled.div`
    margin-bottom: 3.7vh;
    width: 100%;
    margin: 2rem auto;
`;

export const SignUpText = styled.div`
    width: 100%;
    color: var(--green);
    font-size: 0.8rem;
    margin: 1.5rem auto;
    cursor: pointer;
    font-weight: 500;
    font-family: var(--korean);
    text-align: center;
`;
