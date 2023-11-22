import { styled } from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    width: 100vw;
`;

export const PageBody = styled.div`
    width: 59.7rem;
    margin-top: 4.9rem;
`;

export const Header = styled.div`
    height: 2.5rem;
    border-bottom: 1px solid var(--gray);
    margin-bottom: 3.12rem;
`;

export const Title = styled.div`
    font-size: 1.2rem;
    font-weight: 700;
`;

export const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const Card = styled.div`
    margin-right: 2.65rem;
    margin-bottom: 3rem;

    &:nth-child(3n) {
        margin-right: 0;
    }
`;
