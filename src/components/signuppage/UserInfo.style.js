import styled from 'styled-components';
import { Slider } from 'antd';
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: auto;
`;

export const Line = styled.div`
    border-bottom: 0.1em solid var(--gray);
    width: 40.4vw;
    margin-bottom: 1vh;
`;

export const GrayBtn = styled.button`
    width: 9vw;
    height: 5.2vh;
    color: var(--dark-gray);
    padding: 1.4vh;
    border: 0.1em solid var(--gray);
    font-size: 1.5vh;
    font-weight: 400;
    border-radius: 90vh;
    background-color: white;
    margin-bottom: 1.8vh;
    cursor: pointer;
`;

export const Zipcode = styled.input`
    border: 0.1em solid #a7a7a7;
    border-radius: 0.8vh;
    background-color: #e7e7e7;
    width: 11vw;
    height: 5vh;
    margin-right: 1.1vw;
    outline: none;
    font-size: 1.5vh;
    padding: 0 1.5vh 0 1.5vh;
`;

export const ZipcodeWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    width: 40.4vw;
`;

export const AdressText = styled.div`
    font-size: 1.5vh;
    color: #767676;
    width: 40.4vw;
    margin-bottom: 0.8vh;
`;
export const DetailAdress = styled.input`
    width: 39vw;
    /* height: 5vh; */
    border: 0.1em solid #a7a7a7;
    border-radius: 0.8vh;
    margin-bottom: 0.8vh;
    /* padding: 0 1.4vh; */
    outline: none;
    font-size: 1.4vh;
    padding: 1.5vh;
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
`;

export const SliderStyle = styled(Slider)`
    color: var(--green);
    width: 40.4vw;
`;

export const Text = styled.div`
    font-size: 1.5vh;
    font-weight: 600;
    display: flex;
    justify-content: start;
    width: 40.4vw;
    margin-bottom: 0.9vh;
    margin-top: 6.5vh;
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 2.8vh;
    margin-bottom: 7.4vh;
`;

export const SalaryInput = styled.input`
    box-sizing: border-box;
    padding: 1.5vh;
    font-size: 1.5vh;
    width: 18vw;
    height: 5vh;
    margin-right: 1.8vw;
    margin-left: 1.8vw;
    border-radius: 1.1vh;
    border: 0.1em solid #a7a7a7;
`;
