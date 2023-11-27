import styled from 'styled-components';

const S = {};
S.ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
S.Wrapper = styled(S.ColumnContainer)`
    justify-content: center;
    align-items: center;
`;
S.ResultContainer = styled(S.ColumnContainer)`
    gap: 4rem;
`;
S.SearchBox = styled.div`
    display: flex;
    align-items: center;
    margin: 4rem 0 2rem 0;
    width: 59.7rem;
    height: 7rem;
    border-radius: 1rem;
    background: var(--pale-gray);
`;
S.InlineBox = styled.div`
    width: 59.7rem;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 2rem;
`;
S.Content = styled.div`
    display: flex;
    align-items: center;
`;
S.JobTitle = styled.div`
    color: var(--dark-green);
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 3rem 0 4rem 0;
`;
S.InfoBox = styled(S.ColumnContainer)`
    width: ${props => (props.width ? props.width : '59.7rem')};
`;
S.InfoTitle = styled.div`
    font-size: 1.4rem;
    font-weight: 700;
`;
S.Line = styled.hr`
    width: 59.65rem;
    border: 1px solid var(--light-gray);
    margin: 0.5rem 0 1rem 0;
`;
S.Info = styled.div`
    width: ${props => (props.width ? props.width : '59.65rem')};
    font-size: 1rem;
    font-weight: 400;
    white-space: pre-wrap;
    margin-bottom: 4rem;
`;
S.RecommendBox = styled.div`
    display: flex;
    width: 29.1rem;
    border-radius: 1rem;
    border: 1px solid var(--gray);
    background-color: var(--white);
`;
S.Icon = styled.img`
    width: 3rem;
    height: 3rem;
    margin: 1.5rem 1rem 0 1.5rem;
`;
S.GreenBtn = styled.button`
    padding: 0 1.5rem;
    width: 4.75rem;
    height: 3.2rem;
    border-radius: 0.6rem;
    border: none;
    background-color: ${props => props.backgroundColor};
    color: var(--white);
    font-size: 1rem;
    font-weight: 500;
`;
S.Input = styled.input`
    width: 22rem;
    color: var(--black);
    border: 1px #d9d9d9 solid;
    font-size: 1rem;
    border-radius: 0.6rem;
    background-color: var(--white);
    margin-right: 0.5rem;
    padding: 1rem 0.5rem;
    outline: none;

    &::placeholder {
        color: var(--gray);
    }
`;
S.InfoTitle = styled.div`
    font-size: 1.4rem;
    font-weight: 700;
`;
S.InlineContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin-top: 2rem;
    width: 59.65rem;
`;
export { S };
