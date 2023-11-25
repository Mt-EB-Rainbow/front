import { S } from './Recommend.style';
import PageTitle from '../_common/PageTitle';
const RecommendResult = ({ isTest, setIsTest }) => {
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
                <S.ResultTitle>
                    독서 논술 지도사, 요가 지도사, 체험학습 강사, 학원 지도사
                </S.ResultTitle>
            </S.GrayBox>
            <S.InfoBox style={{ marginBottom: '4rem' }}>
                <S.InlineContainer>
                    <S.InfoTitle>추천 직무 더 알아보기</S.InfoTitle>
                    <div style={{ fontSize: '0.8rem', fontWeight: '600' }}>
                        총 2건
                    </div>
                </S.InlineContainer>
                <S.Line />
                <S.ResultContainer>
                    <S.RowContainer>
                        <S.Thumbnail />
                        <S.Text>보육교사</S.Text>
                    </S.RowContainer>
                    <div
                        style={{
                            display: 'flex',
                            gap: '1rem',
                            marginRight: '2rem',
                        }}
                    >
                        <S.Button>추천 직무 백과 바로가기</S.Button>
                        <S.Button>추천 직업 교육 바로가기</S.Button>
                    </div>
                </S.ResultContainer>
                <S.ResultContainer>
                    <S.RowContainer>
                        <S.Thumbnail />
                        <S.Text>보육교사</S.Text>
                    </S.RowContainer>
                    <div
                        style={{
                            display: 'flex',
                            gap: '1rem',
                            marginRight: '2rem',
                        }}
                    >
                        <S.Button>추천 직무 백과 바로가기</S.Button>
                        <S.Button>추천 직업 교육 바로가기</S.Button>
                    </div>
                </S.ResultContainer>
                <div>
                    <S.RowContainer
                        style={{ justifyContent: 'center', gap: '1.5rem' }}
                    >
                        <S.GreenBtn onClick={() => setIsTest(true)}>
                            검사 다시 하기
                        </S.GreenBtn>
                        <S.GreenBtn>이력서 작성 바로가기</S.GreenBtn>
                    </S.RowContainer>
                </div>
            </S.InfoBox>
        </>
    );
};
export default RecommendResult;
