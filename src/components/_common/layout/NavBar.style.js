import styled from 'styled-components';

export const NavBox = styled.div`
    width: 100vw;
    height: 6vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
`;

export const Menu = styled.span`
    font-size: 0.9rem;
    color: #767676;
    font-weight: 500;
    padding: 0.9vh;
    cursor: pointer;
    margin-left: 2vw;
    margin-right: 2vw;
`;
