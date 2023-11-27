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
    width: 29.1rem;
    height: 100vh;
`;

export const TextName = styled.div`
    font-size: 0.8rem;
    font-weight: 600;
    display: flex;
    justify-content: start;
    width: 19.8vw;
    margin-bottom: 0.9vh;
`;

export const InputName = styled.input`
    width: 14rem;
    height: 2.7rem;
    border: 1px solid var(--gray);
    font: 1.5vh;
    outline: none;
    border-radius: 1.1vh;
    margin-bottom: 1.9vh;
    box-sizing: border-box;
    padding: 1.5vh;
`;

export const InputText = styled.input`
    width: 100%;
    height: 2.7rem;
    border: 1px solid var(--gray);
    font-size: 0.9rem;
    outline: none;
    border-radius: 0.6rem;
    margin-bottom: 1.2rem;
    box-sizing: border-box;
    padding: 1.5vh;
`;
export const InputText2 = styled.input`
    width: 100%;
    height: 2.7rem;
    border: 1px solid var(--gray);
    font-size: 0.9rem;
    outline: none;
    border-radius: 0.6rem;

    box-sizing: border-box;
    padding: 1.5vh;
`;
export const Text = styled.div`
    font-size: 0.8rem;
    font-weight: 600;
    display: flex;
    justify-content: start;
    width: 100%;
    margin-bottom: 0.5rem;
`;

export const Err = styled.div`
    color: red;
    font-size: 0.5rem;
    width: 100%;
    margin-bottom: 1.2rem;
    margin-top: 0.5rem;
`;
