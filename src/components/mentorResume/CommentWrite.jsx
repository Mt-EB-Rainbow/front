import styled from 'styled-components';
import { useEffect, useState } from 'react';
import GreenBtn from '../_common/Btn/GreenBtn';
import { FeedbackApi, getFeedbackApi } from '../../api/feedback';
import { useParams } from 'react-router-dom';
import CommentList from './CommentList';

const CommentWrite = () => {
    const [content, setContent] = useState('');
    const memberId = localStorage.getItem('memberId');
    const { resumeId } = useParams();

    const [contentData, setContentData] = useState();

    const onChangeInput = e => {
        setContent(e.target.value);
    };

    //피드백 post
    const onSubmit = async () => {
        const res = await FeedbackApi(memberId, resumeId, content);
        console.log(res?.config.data);
        await getComment();
        setContent('')
    };

    //피드백 get
    const getComment = async () => {
        const res = await getFeedbackApi(resumeId);

        console.log(res);
        setContentData(res?.data.feedbacks);
    };

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
            <CommentList data={contentData} />
            <TitleWrapper>
                <Title>피드백을 남겨주세요</Title>
                <Star>*</Star>
            </TitleWrapper>
            <TextArea
                type='text'
                placeholder='피드백을 남겨주세요.'
                value={content}
                onChange={onChangeInput}
            />
            <GreenBtn
                text={'게시하기'}
                width={10}
                height={2.7}
                paddingHorizontal={3.5}
                radius={5}
                top={2.6}
                bottom={8}
                onClick={onSubmit}
            />
        </>
    );
};
export default CommentWrite;

export const Title = styled.div`
    color: var(--black);
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const Star = styled.div`
    color: var(--Red, #e05363);
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 0.3rem;
`;

export const TitleWrapper = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 0.5rem;
    margin-top: 4rem;
`;

export const TextArea = styled.textarea`
    width: 39.3rem;
    height: 9.5rem;
    border-radius: 0.6rem;
    border: none;
    outline: none;
    resize: none;
    padding: 1rem;
    box-sizing: border-box;
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 500;
    background-color: var(--pale-gray);
`;
