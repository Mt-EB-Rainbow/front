import { S } from './Recommend.style';
import PageTitle from '../_common/PageTitle';
import { useNavigate } from 'react-router';

const RecommendResult = ({ isTest, setIsTest, result }) => {
    const navigate = useNavigate();
    let jobList = '';
    for (let i in result) {
        jobList += i.name + ', ';
    }
    jobList = jobList.slice(0, -2);

    return (
        <>
            <PageTitle text={'상황 기반 직무 추천 결과'} />
            <S.GrayBox
                style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                }}
            >
                <S.Text>나에게 가장 잘 맞는 직무 리스트</S.Text>
                <S.ResultTitle>{jobList}</S.ResultTitle>
            </S.GrayBox>
            <S.InfoBox style={{ marginBottom: '4rem' }}>
                <S.InlineContainer>
                    <S.InfoTitle>추천 직무 더 알아보기</S.InfoTitle>
                    <div style={{ fontSize: '0.8rem', fontWeight: '600' }}>
                        총 {result.length}건
                    </div>
                </S.InlineContainer>
                <S.Line />
                {result.map(item => {
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
                                    navigate(`/dictionary/${item.jobId}`)
                                }
                            >
                                추천 직무 백과 바로가기
                            </S.Button>
                            <S.Button
                                onClick={() =>
                                    navigate(`/training/${item.jobId}`)
                                }
                            >
                                추천 직업 교육 바로가기
                            </S.Button>
                        </div>
                    </S.ResultContainer>;
                })}
                <div>
                    <S.RowContainer
                        style={{ justifyContent: 'center', gap: '1.5rem' }}
                    >
                        <S.GreenBtn onClick={() => setIsTest(true)}>
                            검사 다시 하기
                        </S.GreenBtn>
                        <S.GreenBtn onClick={() => navigate('/resume')}>
                            이력서 작성 바로가기
                        </S.GreenBtn>
                    </S.RowContainer>
                </div>
            </S.InfoBox>
        </>
    );
};
export default RecommendResult;
