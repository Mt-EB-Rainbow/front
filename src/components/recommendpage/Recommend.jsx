import { S } from './Recommend.style';
import PageTitle from '../_common/PageTitle';
const Recommend = () => {
    const testTxt =
        '아직 어떤 일을 하면 좋을지 정하지 못하셨나요?\n어떤 일이 나에게 맞을지, 오래 할 수 있는 일일지 직무 추천 검사를 통해 알아보세요!';
    return (
        <S.Wrapper>
            <PageTitle text={'상황 기반 직무 추천'} />
            <S.GrayBox>
                <S.Title style={{ marginLeft: '2rem' }}>{testTxt}</S.Title>
                <S.Button
                    width='11.33rem'
                    height='3.2rem'
                    margin='0rem 2rem'
                    fontSize='1.2rem'
                >
                    검사 시작하기
                </S.Button>
            </S.GrayBox>
            <S.InfoBox>
                <S.InfoTitle>검사 소개</S.InfoTitle>
                <S.Line margin='0.5rem 0 1rem 0' />
                <S.Info>
                    보육의 개념과 필요성, 보육관련법, 보육시설의 형태와 유형별
                    특징 등 보육교사가 되기 위한 기본적인 이론에 대해 학습하고
                    보육교사의 역할과 자질에 대해 파악할 수 있다. 보육의 개념과
                    필요성, 보육관련법, 보육시설의 형태와 유형별 특징 등
                    보육교사가 되기 위한 기본적인 이론에 대해 학습하고
                    보육교사의 역할과 자질에 대해 파악할 수 있다.보육의 개념과
                    필요성, 보육관련법, 보육시설의 형태와 유형별 특징 등
                    보육교사가 되기 위한 기본적인 이론에 대해 학습하고
                    보육교사의 역할과 자질에 대해 파악할 수 있다.보육의 개념과
                    필요성, 보육관련법, 보육시설의 형태와 유형별 특징 등
                    보육교사가 되기 위한 기본적인 이론에 대해 학습하고
                    보육교사의 역할과 자질에 대해 파악할 수 있다.
                </S.Info>
            </S.InfoBox>
            <S.StartBtn>상황 기반 직무 추천 검사 시작하기</S.StartBtn>
            <S.InfoBox style={{ marginBottom: '4rem' }}>
                <S.InlineContainer>
                    <S.InfoTitle>검사 결과 조회</S.InfoTitle>
                    <div style={{ fontSize: '0.8rem', fontWeight: '600' }}>
                        총 2건
                    </div>
                </S.InlineContainer>
                <S.Line />
                <S.ResultContainer>
                    <S.ColumnContainer>
                        <S.JobTitle>보육교사</S.JobTitle>
                        <S.Date>2023.11.01</S.Date>
                    </S.ColumnContainer>
                    <div
                        style={{
                            display: 'flex',
                            gap: '1rem',
                            marginRight: '2rem',
                        }}
                    >
                        <S.Button>추천 직무 교육 바로가기</S.Button>
                        <S.Button>이력서 작성 바로가기</S.Button>
                    </div>
                </S.ResultContainer>
                <S.ResultContainer>
                    <S.ColumnContainer>
                        <S.JobTitle>보육교사</S.JobTitle>
                        <S.Date>2023.11.01</S.Date>
                    </S.ColumnContainer>
                    <div
                        style={{
                            display: 'flex',
                            gap: '1rem',
                            marginRight: '2rem',
                        }}
                    >
                        <S.Button>추천 직무 교육 바로가기</S.Button>
                        <S.Button>이력서 작성 바로가기</S.Button>
                    </div>
                </S.ResultContainer>
            </S.InfoBox>
        </S.Wrapper>
    );
};

export default Recommend;
