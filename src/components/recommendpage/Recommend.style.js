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
S.GrayBox = styled.div`
    width: 59.7rem;
    height: 7.3rem;
    border-radius: 1rem;
    background: var(--pale-gray);
    margin: 4rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
S.Title = styled.div`
    color: var(--black);
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: ${props => (props.marginB ? props.marginB : '0.5rem')};
    white-space: pre-wrap;
`;
S.Button = styled.button`
    margin: ${props => (props.margin ? props.margin : '0')};
    width: ${props => (props.width ? props.width : '13.78rem')};
    height: ${props => (props.height ? props.height : '3.5rem')};
    background-color: var(--white);
    border: 1px var(--gray) solid;
    color: var(--dark-green);
    text-align: center;
    font-size: ${props => (props.fontSize ? props.fontSize : '1rem')};
    font-weight: 700;
    border-radius: 0.6rem;
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
    margin: ${props => (props.margin ? props.margin : '0.5rem 0 0 0')};
`;
S.Info = styled.div`
    width: ${props => (props.width ? props.width : '59.65rem')};
    font-size: 1rem;
    font-weight: 400;
    white-space: pre-wrap;
    margin-bottom: 4rem;
`;
S.StartBtn = styled.button`
    width: 29.1rem;
    height: 3.2rem;
    background-color: var(--dark-green);
    color: var(--white);
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 4rem;
    border: none;
    border-radius: 100rem;
`;
S.InlineContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
`;
S.ResultContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 59.7rem;
    height: 9.2rem;
    border-bottom: 1px solid var(--light-gray);
`;
S.JobTitle = styled.div`
    font-size: 1.2rem;
    font-weight: 600;
    margin-left: 2rem;
`;
S.Date = styled.div`
    color: var(--dark-gray);
    font-size: 0.8rem;
    font-weight: 400;
    margin-left: 2rem;
`;
export { S };
