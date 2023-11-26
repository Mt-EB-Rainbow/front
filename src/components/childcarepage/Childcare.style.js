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
    height: ${props => (props.nurturesArray ? 'auto' : '100vh')};
`;

export const GrayBox = styled.div`
    margin-top: 80px;
    background-color: var(--pale-gray);
    width: 59.7rem;
    height: 10.5rem;
    border-radius: 1rem;
    box-sizing: border-box;
    padding: 4vh;
    margin-bottom: 5vh;
    border-radius: 1.8vh;
`;
export const BoxTitle = styled.div`
    /* font-size: 20px;
    font-weight: 700;
    margin-bottom: 1.8vh; */
    margin-bottom: 0.78rem;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 600;
`;
export const CustGreenBtn = styled.button`
    background-color: var(--dark-green);
    color: white;
    padding: 10px;
    border: none;
    font-weight: 700;
    border-radius: 10px;
    cursor: pointer;
    width: 8.1rem;
    height: 3.15rem;
    font-size: 1rem;
`;

export const Length = styled.div`
    font-size: 0.8rem;
    font-weight: 600;
    width: 100%;
`;
export const Line = styled.div`
    width: 59.7rem;
    height: 0.05rem;
    border-bottom: 0.1em solid var(--light-gray);
    margin-top: 0.5rem;
`;

export const Dong = styled.input`
    box-sizing: border-box;
    width: 16rem;
    height: 3.3rem;
    margin-left: 0.5rem;
    padding: 1.1rem 0.75rem;
    border-radius: 0.3rem;
    border: 1px solid var(--light-gray);
    background: var(--White, #fff);
    color: black;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    outline: none;
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

//스켈레톤
export const Text = styled.div`
    color: var(--Dark-Gray, #767676);
    text-align: center;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 5rem;
    margin-bottom: 11.85rem;
`;