import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getFeedbackApi } from '../../api/feedback';
import { useEffect, useState } from 'react';

const CommentList = () => {
    const { resumeId } = useParams();

    const [contentData, setContentData] = useState([]);

    //피드백 get
    // const getComment = async () => {
    //     const res = await getFeedbackApi(resumeId);

    //     console.log(res);
    //     setContentData(res?.data.feedbacks);
    // };

    useEffect(() => {
        const getComment = async () => {
            const res = await getFeedbackApi(resumeId);

            console.log(res);
            setContentData(res?.data.feedbacks);
        };
        getComment();
    }, []);
    return (
        <>
            {contentData.length !== 0 ? (
                <>
                    <Title>피드백</Title>

                    {contentData?.map(el => (
                        <>
                            <TitleContainer2>
                                <TitleWrapper2>
                                    <Date>{el.mentorName} 멘토님</Date>
                                </TitleWrapper2>
                                <Date>{el.createdAt.slice(0, 13)}</Date>
                            </TitleContainer2>
                            <Feedback key={el.FeedbackId}>
                                {el.content}
                            </Feedback>
                        </>
                    ))}
                </>
            ) : (
                <></>
            )}
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
    width: 9rem;
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
