import styled from 'styled-components';
const S = {};
S.Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
S.InfoBox = styled.div`
    @media (max-width: 1193px) {
        width: 100%;
    }
    @media (max-width: 600px) {
        width: 90%;
        flex-direction: column;
        padding: 20px 0px;
        gap: 20px;
        height: 100%;
        margin: 40px 0px;
    }
    width: 1194px;
    height: 175px;
    border-radius: 20px;
    background: var(--pale-gray);
    margin: 80px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
S.TextBox = styled.div`
    @media (max-width: 1193px) {
        width: 90%;
    }
    @media (max-width: 600px) {
        margin: 0;
    }
    display: flex;
    flex-direction: column;
    width: 680px;
    margin-left: 40px;
`;
S.Title = styled.div`
    @media (max-width: 600px) {
        font-size: 20px;
    }
    color: var(--black);
    font-size: ${props => (props.fontSize ? props.fontSize : '24px')};
    font-weight: 700;
    margin-bottom: 10px;
`;
S.Text = styled.div`
    @media (max-width: 600px) {
        font-size: 18px;
    }
    color: var(--dark-gray);
    font-size: 24px;
    font-weight: 500;
    white-space: pre-wrap;
`;
S.Button = styled.button`
    @media (max-width: 600px) {
        height: 60px;
        font-size: 20px;
    }
    margin: 0px 40px;
    width: 284px;
    height: 84px;
    background-color: var(--white);
    border: 1px var(--gray) solid;
    color: var(--dark-green);
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    border-radius: 20px;
`;
S.NewContainer = styled.div`
    @media (max-width: 600px) {
        flex-direction: column;
        margin-bottom: 40px;
    }
    display: flex;
    margin-bottom: 80px;
    gap: 40px;
`;
S.InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
S.InnerBox = styled(S.InnerContainer)`
    @media (max-width: 1193px) {
        width: calc(50vw - 20px);
    }
    @media (max-width: 600px) {
        width: 90vw;
        height: 200px;
    }
    width: 577px;
    height: 300px;
    border-radius: 20px;
    background-color: var(--pale-gray);
`;
export { S };
