import styled from 'styled-components';
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    width: 100vw;
`;

export const InputText = styled.input`
    width: 40.4vw;
    height: 5vh;
    border: 0.1em solid var(--gray);
    font: 1.5vh;
    outline: none;
    border-radius: 1.1vh;
    margin-bottom: 3.2vh;
    box-sizing: border-box;
    padding: 1.5vh;
`;

export const InputName = styled.input`
    width: 40.4vw;
    height: 5vh;
    border: 0.1em solid var(--gray);
    font: 1.5vh;
    outline: none;
    border-radius: 1.1vh;
    margin-bottom: 3.2vh;
    box-sizing: border-box;
    padding: 1.5vh;
    background-color: var(--light-gray);
`;

export const Text = styled.div`
    font-size: 1.5vh;
    font-weight: 600;
    display: flex;
    justify-content: start;
    width: 40.4vw;
    margin-bottom: 0.9vh;
`;

export const CheckWrapper = styled.div`
    display: flex;
    margin-left: 1.6vw;
    flex-direction: column;
    align-items: flex-start;
    width: 40.4vw;
`;

export const Check = styled.div`
    margin-bottom: 0.7vh;
    margin-top: 0.7vh;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const CheckText = styled.span`
    color: var(--dark-gray);
    margin-left: 0.5vh;
    font-size: 1.5vh;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const CheckWrapper2 = styled.div`
    display: flex;
    flex-direction: row;
    width: 38.8vw;
`;

export const Radio = styled.input`
    margin-left: 2vw;
    margin-right: 0.5vh;
`;

export const Box = styled.div`
    border-bottom: 0.1em solid #a7a7a7;
    border-top: 0.1em solid #a7a7a7;
    padding-top: 1.8vh;
    padding-bottom: 1.8vh;
    width: 40.4vw;
    margin-bottom: 4.6vh;
`;
