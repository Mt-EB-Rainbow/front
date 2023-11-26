import styled from 'styled-components';
const S = {};
S.Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
S.InfoBox = styled.div`
    @media (max-width: 59.7rem) {
        width: 100%;
    }
    @media (max-width: 30rem) {
        width: 90%;
        flex-direction: column;
        padding: 1rem 0;
        gap: 1rem;
        height: 100%;
        margin: 2rem 0;
    }
    width: 59.7rem;
    height: 8.75rem;
    border-radius: 1rem;
    background: var(--pale-gray);
    margin-top: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
S.Title = styled.div`
    @media (max-width: 30rem) {
        font-size: 1rem;
    }
    color: var(--black);
    font-size: ${props => (props.fontSize ? props.fontSize : '1.4rem')};
    font-weight: 700;
    margin-bottom: ${props => (props.marginB ? props.marginB : '0.5rem')};
    white-space: pre-wrap;
`;
S.Text = styled.div`
    @media (max-width: 30rem) {
        font-size: 0.9rem;
    }
    color: var(--black);
    font-size: 1rem;
    font-weight: 500;
    width: 19rem;
`;
S.Button = styled.button`
    @media (max-width: 30rem) {
        height: 3rem;
        font-size: 1rem;
    }
    margin: 0 2rem;
    width: 14.2rem;
    height: 4.2rem;
    background-color: var(--white);
    border: 1px var(--gray) solid;
    color: var(--dark-green);
    text-align: center;
    font-size: 1.2rem;
    font-weight: 700;
    border-radius: 1rem;
`;
S.NewContainer = styled.div`
    @media (max-width: 30rem) {
        flex-direction: column;
        margin-bottom: 2rem;
    }
    display: flex;
    margin: ${props => (props.margin ? props.margin : '4rem 0')};
    gap: 1.5rem;
`;
S.InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
S.InnerBox = styled.div`
    @media (max-width: 59.7rem) {
        width: calc(50vw - 1rem);
    }
    @media (max-width: 30rem) {
        width: 90vw;
        height: 10rem;
    }
    display: flex;
    align-items: center;
    width: 29.1rem;
    height: 6.75rem;
    border-radius: 1rem;
    border: 1px solid var(--gray);
    background-color: var(--white);
    &:hover {
        border: 1px solid var(--dark-green);
        background-color: var(--pale-green);
    }
    margin-bottom: 0.5rem;
`;
S.Icon = styled.img`
    width: ${props => (props.width ? props.width : '3rem')};
    margin: ${props => (props.margin ? props.margin : '0 2rem')};
`;
export { S };
