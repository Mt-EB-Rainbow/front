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
    width: 59.7rem;
    height: 100vh;
`;

export const Boards = styled.div`
    border-bottom: 0.1em solid var(--light-gray);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 9.3rem;
    box-sizing: border-box;
    padding: 1.45rem 1.7rem 1.45rem 2rem;
`;

export const Info = styled.div``;

export const ResumeBtn = styled.div`
    box-sizing: border-box;
    font-size: 1.8vh;
    color: var(--dark-green);
    font-weight: 700;
    cursor: pointer;
    padding: 1vh;
`;

export const Name = styled.span`
    font-size: 1rem;
    font-weight: 600;
`;
export const JobInfo = styled.div`
    color: var(--gray);
    font-size: 0.8rem;
    margin-bottom: 1.25rem;
    margin-top: 0.5rem;
`;

export const GreenBox = styled.div`
    width: 7.2rem;
    height: 2.1rem;
    flex-shrink: 0;
    background-color: var(--green);
    display: flex;
    border-radius: 0.6rem;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    font-size: 0.9rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const Right = styled.div`
    width: 4.7rem;
    height: 5.65rem;
    flex-shrink: 0;
    text-align: right;
`;

export const Open = styled.div`
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    margin-bottom: 3.25rem;
`;

export const Rewrite = styled.span`
    color: var(--Dark-Gray, #767676);
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-right: 1rem;
    cursor: pointer;
`;

export const Delete = styled.span`
    color: #e05363;
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
`;
export const Text = styled.div`
    color: var(--Dark-Gray, #767676);
    text-align: center;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 6.9rem;
    margin-bottom: 1.6rem;
`;
