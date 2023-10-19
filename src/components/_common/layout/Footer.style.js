import styled from 'styled-components';

export const FooterBox = styled.div`
    width: 100vw;
    height: 100px;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    /* transform: translateY(-100%); */
`;

export const Text = styled.span`
    font-size: 12px;
    font-family: var(--korean);
    color: #767676;
    margin-left: 48px;
    margin-right: 48px;
    & > a {
        color: #767676;
    }
`;
