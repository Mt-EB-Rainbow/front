import { Pagination, Select } from 'antd';
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
    height: auto;
    width: 59.7rem;
`;

export const Box = styled.div`
    display: flex;
    width: 59.7rem;
    height: 7rem;
    background-color: var(--pale-gray);
    justify-content: center;
    align-items: center;
    border-radius: 2.2vh;
    margin: 12.4vh 0 5.2vh;
`;

export const InlineBox = styled.div`
    width: 59.7rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 2rem;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Board = styled.div`
    width: 59.7rem;
    display: flex;
    flex-direction: column;
`;

export const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 6vh;
`;

export const CardBox = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-right: 1.5rem;
    margin-bottom: 1.8rem;

    &:nth-child(4n) {
        margin-right: 0;
    }
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

export const SelectUi = styled(Select)`
    &.ant-select .ant-select-focused {
        border-color: var(--dark-green);
    }
    &.ant-select .ant-select-selector:selected {
        border-color: var(--dark-green);
    }
    &.ant-select-focused:focused {
        border: 1px solid var(--dark-green);
    }
`;
