import { S } from './Recommend.style';
import PageTitle from '../_common/PageTitle';
import RecommendResult from './RecommendResult';
import { useState, useEffect } from 'react';
import { GetQuestion } from '../../api/diagnosis';
import { useNavigate } from 'react-router';

const Recommend = () => {
    const navigate = useNavigate();
    const [questions, setQuestions] = useState({});
    const [answer, setAnswer] = useState({
        q1: -1,
        q2: -1,
        q3: -1,
        q4: -1,
        q5: -1,
        q6: -1,
    });
    const [isLoading, setIsLoading] = useState(true);
    const testTxt =
        '아직 어떤 일을 하면 좋을지 정하지 못하셨나요?\n어떤 일이 내 상황에 맞을지, 오래 할 수 있는 일일지 직무 추천 검사를 통해 알아보세요!';

    const GetQuestions = async () => {
        const res = await GetQuestion();
        setQuestions(res.questions);
        setIsLoading(false);
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

    const checkOnlyOne = (name, val, checkThis) => {
        const checkboxes = document.getElementsByName(name);
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = false;
        }
        checkThis.checked = true;

        let newAnswer = { ...answer };
        newAnswer[name] = val;
        setAnswer(newAnswer);
    };

    useEffect(() => {
        GetQuestions();
    }, []);

    return (
        <S.Wrapper>
            <PageTitle text={'상황 기반 직무 추천'} />
            <S.GrayBox>
                <S.Title style={{ marginLeft: '2rem' }}>{testTxt}</S.Title>
            </S.GrayBox>
            <S.InfoBox>
                <S.InfoTitle>상황 기반 직무 추천 검사</S.InfoTitle>
                <S.Line />
                {isLoading ? (
                    <></>
                ) : (
                    <>
                        {questions.map((item, idx) => {
                            return (
                                <S.QuestionBox>
                                    <S.Question>{item.question}</S.Question>
                                    <S.OptionContainer>
                                        {item.options.map((op, opIdx) => {
                                            const name = 'q' + String(idx + 1);
                                            return (
                                                <>
                                                    <S.CheckBox
                                                        type='checkbox'
                                                        name={name}
                                                        onChange={e =>
                                                            checkOnlyOne(
                                                                name,
                                                                opIdx,
                                                                e.target,
                                                            )
                                                        }
                                                    />
                                                    <S.Text marginL='0'>
                                                        {op.option}
                                                    </S.Text>
                                                </>
                                            );
                                        })}
                                    </S.OptionContainer>
                                </S.QuestionBox>
                            );
                        })}
                    </>
                )}
            </S.InfoBox>
            <S.GreenBtn
                onClick={() =>
                    navigate('/recommend/result', {
                        state: {
                            answer: answer,
                        },
                    })
                }
            >
                결과 확인하기
            </S.GreenBtn>
        </S.Wrapper>
    );
};

export default Recommend;
