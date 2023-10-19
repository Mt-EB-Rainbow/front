import styled from 'styled-components';

export const NavBox = styled.div`
    width: calc(100vw - 32px);
    height: 80px;
    border-bottom: 1px solid #d8d8d8;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
`;

export const Menu = styled.span`
    font-size: 18px;
    color: #767676;
    font-weight: 500;
    padding: 10px 10px 10px 10px;
    cursor: pointer;
    margin-left: 30px;
    margin-right: 30px;
`;
