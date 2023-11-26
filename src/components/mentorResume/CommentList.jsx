import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getFeedbackApi } from '../../api/feedback';

const CommentList = ({ data }) => {
    return (
        <>
            <Title>피드백</Title>

            {data?.map(el => (
                <>
                    <TitleContainer2>
                        <TitleWrapper2>
                            <Date>김00 멘토님</Date>
                        </TitleWrapper2>
                        <Date>2023.11.11</Date>
                    </TitleContainer2>
                    <Feedback key={el.FeedbackId}>{el.content}</Feedback>
                </>
            ))}
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
    width: 100%;
    margin-top: 5rem;
    margin-bottom: 1rem;
`;
export const TitleContainer2 = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 0.5rem;
    justify-content: space-between;
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
    margin-bottom: 1.9rem;
`;
