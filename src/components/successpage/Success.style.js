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
S.TitleBox = styled(S.ColumnContainer)`
    width: 59.7rem;
    margin-bottom: 2rem;
`;
S.Category = styled.div`
    color: var(--black);
    font-size: 1rem;
    font-weight: 600;
    margin: 5rem 0 0.5rem 0;
`;
S.Title = styled.div`
    color: var(--black);
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
`;
S.SubInfo = styled.div`
    color: var(--dark-gray);
    font-size: 0.9rem;
    font-weight: 400;
    margin-right: 1rem;
    a {
        color: var(--dark-gray);
        font-size: 0.9rem;
        font-weight: 400;
        margin-right: 1rem;
    }
`;
S.TextBox = styled.div`
    width: 59.7rem;
    padding: 4rem 0;
    border-radius: 2.5rem;
    display: flex;
    justify-content: center;
    background: url('/imgs/background.png') no-repeat;
    background-size: cover;
    background-position: center;
`;
S.Text = styled.div`
    color: var(--black);
    font-size: 1.4rem;
    font-weight: 400;
    width: 49.5rem;
    white-space: pre-wrap;
`;
S.Image = styled.img`
    width: 33.7rem;
    height: 24.65rem;
    margin: 2rem 0;
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
export { S };
