import { S } from './Recommend.style';
import PageTitle from '../_common/PageTitle';
import RecommendResult from './RecommendResult';
import { useState } from 'react';
const Recommend = () => {
    const [isTest, SetIsTest] = useState(true);
    const testTxt =
        '아직 어떤 일을 하면 좋을지 정하지 못하셨나요?\n어떤 일이 내 상황에 맞을지, 오래 할 수 있는 일일지 직무 추천 검사를 통해 알아보세요!';
    const onResultClick = () => {
        SetIsTest(false);
    };

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
                        <S.QuestionBox>
                            <S.Text>1. 미성년인 자녀가 있나요?</S.Text>
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
                        </S.QuestionBox>
                        <S.QuestionBox>
                            <S.Text>2. 아이를 맡아줄 곳이 있나요?</S.Text>
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
                        </S.QuestionBox>
                    </S.InfoBox>
                    <S.GreenBtn onClick={onResultClick}>
                        결과 확인하기
                    </S.GreenBtn>
                </>
            ) : (
                <RecommendResult isTest={isTest} setIsTest={SetIsTest} />
            )}
        </S.Wrapper>
    );
};

export default Recommend;
