import { Pagination } from 'antd';
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
    height: ${props => (props.height ? 'auto' : '100vh')};
`;

export const Boards = styled.div`
    border-bottom: 0.1em solid var(--light-gray);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    width: 100%;
    height: 7rem;
    box-sizing: border-box;
    padding: 1.45rem 1.7rem 1.45rem 2rem;
`;

export const HeaderWrapper = styled.div`
    width: 59.7rem;
    height: 2rem;
    border-bottom: 0.05rem solid var(--light-gray);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
export const Length = styled.div`
    font-size: 0.8rem;
    font-weight: 600;
`;

export const Info = styled.div`
    height: auto;
`;

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
    flex-shrink: 0;
    text-align: right;
    display: flex;
    align-items: center;
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

export const Footer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const PaginationUi = styled(Pagination)`
    margin-top: 2.35rem;

    // antd 커스텀
    .ant-select-selector,
    .ant-pagination-options {
        display: none;
    }
    .ant-pagination-item-active {
        border: none;
        font-size: 0.8rem;
    }
    .ant-pagination-item-active a:hover {
        color: var(--dark-green);
    }
    .ant-pagination-item a {
        color: var(--dark-gray);
        font-weight: 400;
    }
    .ant-pagination-item-active a {
        border: none;
        color: #000;
    }

    .anticon-double-right svg,
    .anticon-double-left svg {
        color: var(--gray);
    }
`;
