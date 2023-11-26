import styled from 'styled-components';

const S = {};
S.ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
S.RowContainer = styled.div`
    display: flex;
    align-items: center;
`;
S.BetweenContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
S.Wrapper = styled(S.ColumnContainer)`
    justify-content: center;
    align-items: center;
`;
S.GrayBox = styled.div`
    width: 59.7rem;
    padding: 2rem 0;
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
S.GreenBtn = styled.button`
    width: 18.9rem;
    height: 3.6rem;
    background-color: var(--dark-green);
    color: var(--white);
    font-size: 1.2rem;
    font-weight: 600;
    border: none;
    border-radius: 100rem;
    margin-top: 4rem;
`;
S.QuestionBox = styled(S.BetweenContainer)`
    height: 5rem;
    border-bottom: 1px solid var(--light-gray);
    align-items: center;
`;
S.CheckBox = styled.input`
    width: 1rem;
    height: 1rem;
    border-radius: 100rem;
    border: 1px so;
`;
S.InlineContainer = styled(S.BetweenContainer)`
    align-items: end;
`;
S.ResultTitle = styled.div`
    color: var(--dark-green);
    font-size: 1.6rem;
    font-weight: 700;
    margin-left: 2rem;
    width: 56rem;
`;
S.ResultContainer = styled(S.BetweenContainer)`
    align-items: center;
    width: 59.7rem;
    height: 9.2rem;
    border-bottom: 1px solid var(--light-gray);
`;
S.Question = styled.div`
    font-size: 1.2rem;
    font-weight: 500;
    margin-left: 2rem;
    color: var(--black);
`;
S.Text = styled.div`
    font-size: 1.2rem;
    font-weight: 500;
    margin-left: ${props => (props.marginL ? props.marginL : '2rem')};
    color: var(--dark-gray);
`;
S.CheckBox = styled.input`
    margin-left: 2rem;
`;
S.Thumbnail = styled.img`
    margin-left: 2rem;
    width: 4rem;
    height: 4rem;
    border-radius: 1rem;
    background-color: var(--light-gray);
`;
S.OptionContainer = styled.div`
    display: flex;
    gap: 1rem;
    margin-right: 2rem;
`;

export { S };
