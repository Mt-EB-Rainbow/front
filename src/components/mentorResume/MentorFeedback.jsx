import * as S from '../resume/New.style';
import PageTitle from '../_common/PageTitle';
import GreenBtn from '../_common/Btn/GreenBtn';
import Comment from './Comment';
import { useEffect, useState } from 'react';
import { getResumeContentApi } from '../../api/resume';
import { useParams } from 'react-router-dom';

const MentorFeedback = () => {
    const { resumeId } = useParams();
    const [content, setContent] = useState([]);
    console.log(content);

    //이력서 내용 조회(readOnly로 막아둠)
    useEffect(() => {
        const getContent = async () => {
            const res = await getResumeContentApi(resumeId);

            setContent(res?.data);
        };
        getContent();
    }, []);

    //피드백 여부
    const feedback = content?.resumeStatus == 'NOT_ASKED' ? false : true;
    console.log(feedback);

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
                        readOnly={true}
                        defaultValue={content.title}
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
                        readOnly={true}
                        defaultValue={content.introduction}
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
                                <S.SmallInput1
                                    type='text'
                                    placeholder='2000.00'
                                    readOnly={true}
                                    defaultValue={
                                        content?.educations?.[0].startDate
                                    }
                                />
                                <span>- </span>
                                <S.SmallInput1
                                    type='text'
                                    placeholder='2000.00'
                                    readOnly={true}
                                    defaultValue={
                                        content?.educations?.[0].finishDate
                                    }
                                />
                                <S.School
                                    type='text'
                                    placeholder='학교명'
                                    readOnly={true}
                                    defaultValue={content?.educations?.[0].name}
                                />
                                <S.SmallInput
                                    type='text'
                                    placeholder='전공 및 학위'
                                    readOnly={true}
                                    defaultValue={
                                        content?.educations?.[0].major
                                    }
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
                            <S.SmallInput1
                                type='text'
                                readOnly={true}
                                defaultValue={
                                    content?.experiences?.[0].startDate
                                }
                            />
                            <span>- </span>
                            <S.SmallInput1
                                type='text'
                                readOnly={true}
                                defaultValue={
                                    content?.experiences?.[0].finishDate
                                }
                            />
                            <S.School
                                type='text'
                                readOnly={true}
                                defaultValue={
                                    content?.experiences?.[0].department
                                }
                            />
                            <S.SmallInput
                                type='text'
                                placeholder='부서명 / 직책'
                                readOnly={true}
                                defaultValue={
                                    content?.experiences?.[0].position
                                }
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
                                readOnly={true}
                                defaultValue={
                                    content?.languages?.[0].gainedDate
                                }
                            />
                            <S.School
                                type='text'
                                placeholder='언어'
                                readOnly={true}
                                defaultValue={content?.languages?.[0].testName}
                            />
                            <S.SmallInput
                                type='text'
                                placeholder='어학시험명 / 급수'
                                readOnly={true}
                                defaultValue={content?.languages?.[0].score}
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
                            <S.SmallInput1
                                type='text'
                                readOnly={true}
                                defaultValue={content?.awards?.[0].startDate}
                            />
                            <span>- </span>
                            <S.SmallInput1
                                type='text'
                                readOnly={true}
                                defaultValue={content?.awards?.[0].finishDate}
                            />
                            <S.School
                                type='text'
                                placeholder='활동명 / 대회명'
                                readOnly={true}
                                defaultValue={content?.awards?.[0].activity}
                            />
                            <S.SmallInput
                                type='text'
                                placeholder='활동 내용 / 수상 내역'
                                readOnly={true}
                                defaultValue={content?.awards?.[0].content}
                            />
                        </div>
                    </S.GrayBox>

                    <Comment feedback={feedback} />
                </S.Wrapper>
            </S.Container>
        </>
    );
};

export default MentorFeedback;
