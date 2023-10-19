import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

export const Text = styled.div`
    font-size: 16px;
    font-family: var(--korean);
    color: var(--dark-gray);
    margin-bottom: 6px;
    display: flex;
    flex-direction: column;
    justify-content: start;
`;

export const InputEmail = styled.input`
    width: 378px;
    height: 54px;
    box-sizing: border-box;
    padding: 16px 15px 16px 15px;
    border-radius: 12px;
    border: 1px solid var(--gray);
    font-size: 18px;
    font-weight: 400;
    outline: none;
    color: #3c3d40;
`;

export const InputWrapper = styled.div`
    margin-bottom: 40px;
    width: 378px;
    margin-top: 40px;
`;

export const SectionText = styled.div`
    color: var(--gray);
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const LoginBtn = styled.button`
    color: var(--dark-gray);
    padding: 15px 162px 15px 162px;
    border: 1px solid var(--gray);
    font-size: 20px;
    font-weight: 500;
    border-radius: 100px;
    font-family: var(--korean);
    font-weight: 600;
    background-color: white;
    margin-bottom: 20px;
    cursor: pointer;
`;

export const SignUpText = styled.div`
    margin-top: 10px;
    color: var(--green);
    font-size: 16px;
    padding: 10px;
    cursor: pointer;
    margin-bottom: 10px;
`;
