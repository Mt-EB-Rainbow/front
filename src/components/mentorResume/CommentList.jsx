import styled from 'styled-components';

const CommentList = () => {
    return (
        <>
            <TitleContainer2>
                <TitleWrapper2>
                    <Title>피드백</Title>
                </TitleWrapper2>
                <Date>2023.11.11</Date>
            </TitleContainer2>
            <Feedback>
                이거 저거를 이렇게 저렇게 수정해주시면 될 것 같습니다.
                수고하셨습니다!
            </Feedback>
        </>
    );
};
export default CommentList;

export const Title = styled.div`
    color: var(--black);
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
export const TitleContainer2 = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 0.5rem;
    justify-content: space-between;
    margin-top: 4rem;
`;

export const Date = styled.div`
    color: var(--Dark-Gray, #767676);
    font-size: 0.7rem;
    font-style: normal;
    font-weight: 700;
    display: flex;
    align-items: end;
`;

export const TitleWrapper2 = styled.div`
    display: flex;
    width: 100%;
`;

export const Feedback = styled.div`
    width: 100%;
    height: auto;
    background-color: var(--pale-green);
    padding: 1rem;
    border-radius: 0.6rem;
    box-sizing: border-box;
    color: var(--Dark-Gray, #767676);
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;
