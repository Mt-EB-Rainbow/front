import * as S from '../resume/New.style';
import PageTitle from '../_common/PageTitle';
import GreenBtn from '../_common/Btn/GreenBtn';
import Comment from './Comment';

const MentorFeedback = () => {
    return (
        <>
            <S.Container>
                <S.Wrapper>
                    <PageTitle text={'이력서 상세'} />

                    <S.TitleWapper>
                        <S.Title style={{ marginTop: '5.4rem' }}>
                            이력서 제목
                        </S.Title>
                    </S.TitleWapper>
                    <S.Input
                        type='text'
                        placeholder='제목을 입력하세요.'
                        maxLength='29'
                    />

                    <S.TitleWapper>
                        <S.Title>직무 선택</S.Title>
                    </S.TitleWapper>
                    <S.ShortInputWrapper>
                        <S.Input type='text' placeholder='직무를 입력하세요.' />
                    </S.ShortInputWrapper>
                    <S.TitleWapper>
                        <S.Title>간단한 자기소개</S.Title>
                    </S.TitleWapper>

                    <S.TextArea
                        type='text'
                        placeholder='자기소개를 입력하세요.'
                    />
                    {/* 학력 */}
                    <S.TitleContainer>
                        <S.TitleWrapper2>
                            <S.Title>학력</S.Title>
                        </S.TitleWrapper2>
                    </S.TitleContainer>

                    <S.Line />

                    <div style={{ width: '39.3rem' }}>
                        <S.GrayBox>
                            <div>
                                <S.SmallInput
                                    type='text'
                                    placeholder='2000.00 - 2000.00'
                                />
                                <S.School type='text' placeholder='학교명' />
                                <S.SmallInput
                                    type='text'
                                    placeholder='전공 및 학위'
                                />
                            </div>
                        </S.GrayBox>
                    </div>

                    {/* 경력 */}
                    <S.TitleContainer2>
                        <S.TitleWrapper2>
                            <S.Title>경력</S.Title>
                        </S.TitleWrapper2>
                    </S.TitleContainer2>

                    <S.Line />
                    <S.GrayBox>
                        <div>
                            <S.SmallInput
                                type='text'
                                placeholder='2000.00 - 2000.00'
                            />
                            <S.School type='text' placeholder='회사명' />
                            <S.SmallInput
                                type='text'
                                placeholder='부서명 / 직책'
                            />
                        </div>
                    </S.GrayBox>
                    {/* 어학 */}
                    <S.TitleContainer2>
                        <S.TitleWrapper2>
                            <S.Title>어학</S.Title>
                        </S.TitleWrapper2>
                    </S.TitleContainer2>

                    <S.Line />
                    <S.GrayBox>
                        <div>
                            <S.SmallInput
                                type='text'
                                placeholder='2000.00 (취득년월)'
                            />
                            <S.School type='text' placeholder='언어' />
                            <S.SmallInput
                                type='text'
                                placeholder='어학시험명 / 급수'
                            />
                        </div>
                    </S.GrayBox>
                    {/* 수상 및 기타 */}
                    <S.TitleContainer2>
                        <S.TitleWrapper2>
                            <S.Title>수상 및 기타</S.Title>
                        </S.TitleWrapper2>
                    </S.TitleContainer2>

                    <S.Line />
                    <S.GrayBox>
                        <div>
                            <S.SmallInput
                                type='text'
                                placeholder='2000.00 - 2000.00'
                            />
                            <S.School
                                type='text'
                                placeholder='활동명 / 대회명'
                            />
                            <S.SmallInput
                                type='text'
                                placeholder='활동 내용 / 수상 내역'
                            />
                        </div>
                    </S.GrayBox>

                    <Comment />
                </S.Wrapper>
            </S.Container>
        </>
    );
};

export default MentorFeedback;
