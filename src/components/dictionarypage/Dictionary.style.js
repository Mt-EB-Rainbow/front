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
    margin: 2rem 0 2rem 0;
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
    height: 10rem;
    border-radius: 1rem;
    border: 1px solid var(--gray);
    background-color: var(--white);
`;
S.Icon = styled.img`
    width: 3rem;
    height: 3rem;
    margin: 1.5rem 1rem 0 1.5rem;
`;

export { S };
