import { Switch } from 'antd';
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
    width: 39.3rem;
    height: auto;
`;

export const Title = styled.div`
    color: var(--black);
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
export const Star = styled.div`
    color: var(--Red, #e05363);
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 0.3rem;
`;

export const TitleWapper = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 0.5rem;
`;

export const Input = styled.input`
    border-radius: 0.6rem;
    border: 1px solid var(--Gray, #999);
    width: 100%;
    height: 2.8rem;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 0.8rem 1rem;
    box-sizing: border-box;
    outline: none;
    margin-bottom: 2.6rem;
    position: relative;
`;
export const Count = styled.p`
    color: var(--Gray, #999);
    text-align: right;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    position: absolute;
    margin-top: 15.1rem;
    margin-left: 34rem;
`;

export const ShortInput = styled.input`
    border-radius: 0.6rem;
    border: 1px solid var(--Gray, #999);
    width: 27.45rem;
    height: 2.8rem;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 500;
    padding: 0rem 1rem;
    box-sizing: border-box;
    margin-bottom: 2.6rem;
    margin-right: 1rem;

    &.read-only {
        background-color: var(--light-gray);
        color: var(--dark-gray);
        cursor: not-allowed;
        outline: none;
    }
`;

export const ShortInputWrapper = styled.div`
    width: 100%;
`;

export const SwitchStyle = styled.div`
    margin-top: 1.65rem;
    margin-bottom: 2.15rem;
    width: 41.1rem;
    text-align: right;
`;
export const GreenBox = styled.div`
    box-sizing: border-box;
    border-radius: 0.4rem;
    background: var(--Pale-Green, #e6f4e7);
    width: 39.3rem;
    height: auto;
    flex-shrink: 0;
    color: var(--Dark-Gray, #767676);
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    padding: 1rem;
    margin-bottom: 0.5rem;
    white-space: pre-wrap;
`;

export const TextArea = styled.textarea`
    width: 39.3rem;
    height: 10rem;
    border-radius: 0.6rem;
    border: 1px solid var(--Gray, #999);
    outline: none;
    resize: none;
    padding: 1rem;
    box-sizing: border-box;
    margin-bottom: 2.75rem;
    font-size: 0.8rem;
`;

export const Plus = styled.div`
    color: var(--Dark-Green, #018c0d);
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 600;
    cursor: pointer;
`;

export const TitleContainer = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 0.5rem;
    justify-content: space-between;
`;

export const TitleContainer2 = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 0.5rem;
    justify-content: space-between;
    margin-top: 4rem;
`;
export const TitleWrapper2 = styled.div`
    display: flex;
`;

export const GrayBox = styled.div`
    border-bottom: 0.05rem solid var(--gray);
    height: 3.6rem;
    width: 100%;
    padding: 0.85rem 0rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const BoxLeft = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    width: 10.25rem;
    & > div {
        display: flex;
        flex-direction: row;
    }
`;

export const Label = styled.label`
    display: flex;
    flex-direction: row;
    margin-right: 0.5rem;
    align-items: center;
    cursor: pointer;

    & > div {
        font-size: 0.6rem;
        color: var(--gray);
    }
`;
export const CheckBox = styled.input`
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 100rem;
    border: 1px solid var(--gray);
    margin-right: 0.24rem;
`;

export const BoxRight = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 27rem;
`;

export const SmallInput = styled.input`
    width: 7.4rem;
    color: black;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border: none;
    outline: none;

    &::placeholder {
        color: var(--gray);
    }
`;
export const FindBtn = styled.button`
    width: 10.75rem;
    height: 2.8rem;
    background-color: var(--white);
    color: var(--dark-green);
    font-size: 0.8rem;
    border-radius: 0.6rem;
    font-weight: 700;
    border: 1px solid var(--gray);
    cursor: pointer;
`;
export const SmallInput1 = styled.input`
    color: black;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border: none;
    outline: none;
    width: 3.5rem;

    &::placeholder {
        color: var(--gray);
    }
`;

export const School = styled.input`
    height: 1.2rem;
    color: black;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border: none;
    outline: none;

    &::placeholder {
        color: var(--gray);
    }
`;
export const Line = styled.div`
    width: 39.3rem;
    border-bottom: 0.05rem solid var(--gray);
`;

export const RemoveBtn = styled.div`
    color: var(--red);
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;
`;
