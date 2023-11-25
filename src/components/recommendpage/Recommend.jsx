import { S } from './Recommend.style';
import PageTitle from '../_common/PageTitle';
import RecommendResult from './RecommendResult';
import { useState, useEffect } from 'react';
import { GetQuestion, PostAnswer } from '../../api/diagnosis';
const Recommend = () => {
    const [isTest, setIsTest] = useState(true);
    const [question, setQuestion] = useState({});
    const [answer, setAnswer] = useState({
        q1: 0,
        q2: 0,
        q3: 0,
        q4: 0,
        q5: 0,
        q6: 0,
    });
    const [result, setResult] = useState([]);
    const testTxt =
        '아직 어떤 일을 하면 좋을지 정하지 못하셨나요?\n어떤 일이 내 상황에 맞을지, 오래 할 수 있는 일일지 직무 추천 검사를 통해 알아보세요!';

    const GetQuestions = async () => {
        const res = await GetQuestion();
        console.log(res);
        setQuestion(res.questions);
    };
    const onResultClick = async answer => {
        const res = await PostAnswer(answer);
        console.log(res);
        setResult(res.jobsResponse);
        setIsTest(false);
    };

    useEffect(() => {
        GetQuestions();
    }, []);

    return (
        <S.Wrapper>
            {isTest ? (
                <>
                    <PageTitle text={'상황 기반 직무 추천'} />
                    <S.GrayBox>
                        <S.Title style={{ marginLeft: '2rem' }}>
                            {testTxt}
                        </S.Title>
                    </S.GrayBox>
                    <S.InfoBox>
                        <S.InfoTitle>상황 기반 직무 추천 검사</S.InfoTitle>
                        <S.Line />
                        {question.map(item => {
                            <S.QuestionBox>
                                <S.Question>{item.question}</S.Question>
                                <div
                                    style={{
                                        display: 'flex',
                                        gap: '1rem',
                                        marginRight: '2rem',
                                    }}
                                >
                                    <S.CheckBox type='checkbox' />
                                    <S.Text marginL='0'>예</S.Text>
                                    <S.CheckBox type='checkbox' />
                                    <S.Text marginL='0'>아니오</S.Text>
                                </div>
                            </S.QuestionBox>;
                        })}
                    </S.InfoBox>
                    <S.GreenBtn onClick={onResultClick}>
                        결과 확인하기
                    </S.GreenBtn>
                </>
            ) : (
                <RecommendResult
                    isTest={isTest}
                    setIsTest={setIsTest}
                    result={result}
                />
            )}
        </S.Wrapper>
    );
};

export default Recommend;
