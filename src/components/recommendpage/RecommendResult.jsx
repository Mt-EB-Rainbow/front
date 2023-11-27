import { S } from './Recommend.style';
import PageTitle from '../_common/PageTitle';
import { useNavigate, useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import { PostAnswer } from '../../api/diagnosis';

const RecommendResult = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [result, setResult] = useState({});
    const [jobList, setJobList] = useState('');

    const PostAns = async answer => {
        const res = await PostAnswer(answer);
        console.log(res);
        setResult(res);
    };

    const MakeList = jobs => {
        let jList = '';
        for (let i in jobs) {
            jList += jobs[i].name + ', ';
        }
        jList = jList.slice(0, -2);
        console.log(jList);
        return jList;
    };

    useEffect(() => {
        PostAns(state.answer);
    }, []);

    useEffect(() => {
        if (Object.keys(result).length !== 0) {
            const temp = MakeList(result.jobsResponse);
            setJobList(temp);
        }
    }, [result]);

    return (
        <S.Wrapper>
            {Object.keys(result).length !== 0 && (
                <>
                    <PageTitle text={'상황 기반 직무 추천 결과'} />
                    <S.GrayBox
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                        }}
                    >
                        <S.Text style={{ marginBottom: '0.2rem' }}>
                            나에게 가장 잘 맞는 직무 리스트
                        </S.Text>
                        <S.ResultTitle>{jobList}</S.ResultTitle>
                    </S.GrayBox>
                    <S.InfoBox style={{ marginBottom: '4rem' }}>
                        <S.InlineContainer>
                            <S.InfoTitle>추천 직무 더 알아보기</S.InfoTitle>
                            <div
                                style={{
                                    fontSize: '0.8rem',
                                    fontWeight: '600',
                                }}
                            >
                                총 {Object.keys(result.jobsResponse).length}건
                            </div>
                        </S.InlineContainer>
                        <S.Line />
                        {result.jobsResponse.map(item => {
                            return (
                                <S.ResultContainer key={item.jobId}>
                                    <S.RowContainer>
                                        <S.Thumbnail src={item.imageUrl} />
                                        <S.Text>{item.name}</S.Text>
                                    </S.RowContainer>
                                    <div
                                        style={{
                                            display: 'flex',
                                            gap: '1rem',
                                            marginRight: '2rem',
                                        }}
                                    >
                                        <S.Button
                                            onClick={() =>
                                                navigate('/dictionary/', {
                                                    state: {
                                                        jobId: item.jobId,
                                                        jobName: item.name,
                                                    },
                                                })
                                            }
                                        >
                                            추천 직무 백과 바로가기
                                        </S.Button>
                                        <S.Button
                                            onClick={() =>
                                                navigate('/training/', {
                                                    state: {
                                                        jobId: item.jobId,
                                                        jobName: item.name,
                                                    },
                                                })
                                            }
                                        >
                                            추천 직업 교육 바로가기
                                        </S.Button>
                                    </div>
                                </S.ResultContainer>
                            );
                        })}
                        <div>
                            <S.RowContainer
                                style={{
                                    justifyContent: 'center',
                                    gap: '1.5rem',
                                }}
                            >
                                {result.needNurture && (
                                    <S.GreenBtn
                                        onClick={() => navigate('/childcare')}
                                    >
                                        보육시설 조회 바로가기
                                    </S.GreenBtn>
                                )}
                                <S.GreenBtn onClick={() => navigate('/resume')}>
                                    이력서 작성 바로가기
                                </S.GreenBtn>
                            </S.RowContainer>
                        </div>
                    </S.InfoBox>
                </>
            )}
        </S.Wrapper>
    );
};
export default RecommendResult;
