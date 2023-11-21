import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vh;
`;

export const Text = styled.div`
    font-size: 0.8rem;
    font-family: var(--korean);
    color: var(--dark-gray);
    margin-bottom: 0.5vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
`;

export const InputEmail = styled.input`
    width: 19rem;
    height: 2.7rem;
    box-sizing: border-box;
    padding: 1.5vh;
    border-radius: 1.2vh;
    border: 0.1em solid var(--gray);
    font-size: 1.6vh;
    font-weight: 400;
    outline: none;
    color: #3c3d40;
`;

export const InputWrapper = styled.div`
    margin-bottom: 3.7vh;
    margin-top: 3.7vh;
`;

export const SectionText = styled.div`
    color: var(--gray);
    margin-top: 1.8vh;
    margin-bottom: 1.8vh;
    font-size: 0.8rem;
    font-weight: 600;
`;

export const LoginBtn = styled.button`
    width: 19rem;
    color: var(--dark-gray);
    padding: 0.75rem 8.1rem;
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

export const SignUpText = styled.div`
    margin-top: 0.9vh;
    color: var(--green);
    font-size: 0.8rem;
    padding: 1vh;
    cursor: pointer;
    margin-bottom: 0.9vh;
    font-weight: 500;
    font-family: var(--korean);
`;
