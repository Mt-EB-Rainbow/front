import GreenBtn from '../_common/Btn/GreenBtn';
import PageTitle from '../_common/PageTitle';
import * as S from './New.style';
import { useEffect, useMemo, useState } from 'react';
import { Switch } from 'antd';
import './Switch.css';
import { useNavigate, useParams } from 'react-router-dom';
import {
    NewResumeApi,
    getResumeContentApi,
    postResumeSection,
    updateResumeBasicInfo,
    updateResumeEducation,
    updateResumeExperience,
    updateResumeLanguage,
    updateResumeAward,
} from '../../api/resume';
import JobModal from './Modal';
import {
    convertDateFieldsInArrayToCustom,
    convertDateFieldsInArray,
} from '../../util/DateFormatter';
import { GetCategories } from '../../api/dictionary';

const New = ({ isEdit }) => {
    // 직무 조회 리스트 get
    const getJobList = async () => {
        const getJobData = await GetCategories();
        setJobcategory(getJobData?.categoryResponses);
    };

    const { resumeId } = useParams();
    const navigate = useNavigate();
    const [inputCount, setInputCount] = useState(0);
    const [check, setCheck] = useState(false);
    const [title, setTitle] = useState('');
    const [introduction, setIntroduction] = useState('');
    const [educations, setEducations] = useState([]);
    const [experiences, setExperiences] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [awards, setAwards] = useState([]);
    //모달
    const [selectedJob, setSelectedJob] = useState(''); // 모달에서 선택된 직업
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [contentdata, setContentdata] = useState({});
    const [jobcategory, setJobcategory] = useState([]); //모달에 직무 api 연결
    const [job, setJob] = useState([]); //모달에 띄울 job 리스트

    const initialEducation = {
        startDate: '',
        finishDate: '',
        name: '',
        major: '',
        degreeStatus: null,
    };

    const initialExperience = {
        startDate: '',
        finishDate: '',
        department: '',
        position: '',
        isPresent: false,
    };

    const initialLanguage = {
        gainedDate: '',
        testName: '',
        score: '',
    };

    const initialAward = {
        startDate: '',
        finishDate: '',
        activity: '',
        content: '',
    };

    useEffect(() => {
        if (isEdit) {
            const getContent = async () => {
                const res = await getResumeContentApi(resumeId);

                // 날짜 필드 변환
                const dataWithConvertedDates = {
                    ...res.data,
                    educations: convertDateFieldsInArrayToCustom(
                        res.data.educations,
                        ['startDate', 'finishDate'],
                    ),
                    experiences: convertDateFieldsInArrayToCustom(
                        res.data.experiences,
                        ['startDate', 'finishDate'],
                    ),
                    languages: convertDateFieldsInArrayToCustom(
                        res.data.languages,
                        ['gainedDate'],
                    ),
                    awards: convertDateFieldsInArrayToCustom(res.data.awards, [
                        'startDate',
                        'finishDate',
                    ]),
                };

                // 변환된 데이터로 상태 업데이트
                setContentdata(dataWithConvertedDates);
                setTitle(dataWithConvertedDates.title);
                setIntroduction(dataWithConvertedDates.introduction);
                setEducations(
                    dataWithConvertedDates.educations || [initialEducation],
                );
                setExperiences(
                    dataWithConvertedDates.experiences || [initialExperience],
                );
                setLanguages(
                    dataWithConvertedDates.languages || [initialLanguage],
                );
                setAwards(dataWithConvertedDates.awards || [initialAward]);
            };
            getContent();
        } else {
            setEducations([initialEducation]);
            setExperiences([initialExperience]);
            setLanguages([initialLanguage]);
            setAwards([initialAward]);
        }
    }, [isEdit, resumeId]);

    // 상태관리 함수
    const onChangeTitle = e => {
        setTitle(e.target.value);
        setInputCount(e.target.value.length);
    };

    const onChangeContent = e => {
        setIntroduction(e.target.value);
    };

    const onChangeCheckbox = checked => {
        // console.log(`switch to ${checked}`);
        setCheck(!check);
    };

    // 모달
    const openModal = async () => {
        await getJobList();
        setModalIsOpen(!modalIsOpen);
        console.log(job);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleJobSelect = job => {
        setSelectedJob(job);
        closeModal();
    };

    useEffect(() => {
        if (jobcategory) {
            const newJobArray = [];
            for (let i = 0; i < jobcategory.length; i++) {
                for (let j = 0; j < jobcategory[i].jobResponses.length; j++) {
                    newJobArray.push(jobcategory[i].jobResponses[j].name);
                }
            }
            setJob(newJobArray);
        }
    }, [jobcategory]);

    // 학력 상태관리
    const setStartDate = (date, index) => {
        setEducations(prevEducations =>
            prevEducations.map((education, idx) => {
                if (idx === index) {
                    return { ...education, startDate: date };
                }
                return education;
            }),
        );
    };

    const setFinishDate = (date, index) => {
        setEducations(prevEducations =>
            prevEducations.map((education, idx) => {
                if (idx === index) {
                    return { ...education, finishDate: date };
                }
                return education;
            }),
        );
    };

    const setName = (name, index) => {
        setEducations(prevEducations =>
            prevEducations.map((education, idx) => {
                if (idx === index) {
                    return { ...education, name: name };
                }
                return education;
            }),
        );
    };

    const setMajor = (major, index) => {
        setEducations(prevEducations =>
            prevEducations.map((education, idx) => {
                if (idx === index) {
                    return { ...education, major: major };
                }
                return education;
            }),
        );
    };

    // 경력 상태관리
    const setDepartment = (department, index) => {
        setExperiences(prevExperiences =>
            prevExperiences.map((experience, idx) => {
                if (idx === index) {
                    return { ...experience, department: department };
                }
                return experience;
            }),
        );
    };

    const setPosition = (position, index) => {
        setExperiences(prevExperiences =>
            prevExperiences.map((experience, idx) => {
                if (idx === index) {
                    return { ...experience, position: position };
                }
                return experience;
            }),
        );
    };

    const setStartDate2 = (date, index) => {
        setExperiences(prevExperiences =>
            prevExperiences.map((experience, idx) => {
                if (idx === index) {
                    return { ...experience, startDate: date };
                }
                return experience;
            }),
        );
    };

    const setFinishDate2 = (date, index) => {
        setExperiences(prevExperiences =>
            prevExperiences.map((experience, idx) => {
                if (idx === index) {
                    return { ...experience, finishDate: date };
                }
                return experience;
            }),
        );
    };

    // 어학 상태관리
    const setGainedDate = (date, index) => {
        setLanguages(prevLanguages =>
            prevLanguages.map((language, idx) => {
                if (idx === index) {
                    return { ...language, gainedDate: date };
                }
                return language;
            }),
        );
    };

    const setTestName = (name, index) => {
        setLanguages(prevLanguages =>
            prevLanguages.map((language, idx) => {
                if (idx === index) {
                    return { ...language, testName: name };
                }
                return language;
            }),
        );
    };

    const setScore = (score, index) => {
        setLanguages(prevLanguages =>
            prevLanguages.map((language, idx) => {
                if (idx === index) {
                    return { ...language, score: score };
                }
                return language;
            }),
        );
    };

    // 수상 상태관리
    const setStartDate3 = (date, index) => {
        setAwards(prevAwards =>
            prevAwards.map((award, idx) => {
                if (idx === index) {
                    return { ...award, startDate: date };
                }
                return award;
            }),
        );
    };

    const setFinishDate3 = (date, index) => {
        setAwards(prevAwards =>
            prevAwards.map((award, idx) => {
                if (idx === index) {
                    return { ...award, finishDate: date };
                }
                return award;
            }),
        );
    };

    const setActivity = (activity, index) => {
        setAwards(prevAwards =>
            prevAwards.map((award, idx) => {
                if (idx === index) {
                    return { ...award, activity: activity };
                }
                return award;
            }),
        );
    };

    const setContent = (content, index) => {
        setAwards(prevAwards =>
            prevAwards.map((award, idx) => {
                if (idx === index) {
                    return { ...award, content: content };
                }
                return award;
            }),
        );
    };

    // 체크박스 상태 관리 함수
    const checkOnlyOne = (index, status) => {
        setEducations(prevEducations =>
            prevEducations.map((education, idx) => {
                if (idx === index) {
                    return { ...education, degreeStatus: status };
                }
                return { ...education, degreeStatus: null };
            }),
        );
    };

    // 항목 추가 함수
    const addEducation = () => {
        setEducations(prev => [...prev, { ...initialEducation }]);
    };

    const addExperience = () => {
        setExperiences(prev => [...prev, { ...initialExperience }]);
    };

    const addLanguage = () => {
        setLanguages(prev => [...prev, { ...initialLanguage }]);
    };

    const addAwards = () => {
        setAwards(prev => [...prev, { ...initialAward }]);
    };

    // 항목 삭제 함수
    const removeEducation = index => {
        setEducations(prevEducations =>
            prevEducations.filter((_, eduIndex) => eduIndex !== index),
        );
    };

    const removeExperience = index => {
        setExperiences(prevEducations =>
            prevEducations.filter((_, exIndex) => exIndex !== index),
        );
    };

    const removeLanguage = index => {
        setLanguages(prevLanguages =>
            prevLanguages.filter((_, lanIndex) => lanIndex !== index),
        );
    };

    const removeAwards = index => {
        setAwards(prevAward =>
            prevAward.filter((_, awardsIndex) => awardsIndex !== index),
        );
    };

    const onResumeSubmit = async e => {
        e.preventDefault();
        try {
            // 기본 이력서 정보 업데이트
            await updateResumeBasicInfo(resumeId, {
                title,
                introduction,
                isPrivate: check,
                jobName: selectedJob,
            });

            // 각 섹션 데이터 변환
            const convertedEducations = convertDateFieldsInArray(educations, [
                'startDate',
                'finishDate',
            ]);
            const convertedExperiences = convertDateFieldsInArray(experiences, [
                'startDate',
                'finishDate',
            ]);
            const convertedLanguages = convertDateFieldsInArray(languages, [
                'gainedDate',
            ]);
            const convertedAwards = convertDateFieldsInArray(awards, [
                'startDate',
                'finishDate',
            ]);

            // 학력 데이터 처리
            for (const education of convertedEducations) {
                if (education.id) {
                    await updateResumeEducation(education.id, education);
                } else {
                    await postResumeSection(resumeId, 'education', education);
                }
            }

            // 경력 데이터 처리
            for (const experience of convertedExperiences) {
                if (experience.id) {
                    await updateResumeExperience(experience.id, experience);
                } else {
                    await postResumeSection(resumeId, 'experience', experience);
                }
            }

            // 어학 데이터 처리
            for (const language of convertedLanguages) {
                if (language.id) {
                    await updateResumeLanguage(language.id, language);
                } else {
                    await postResumeSection(resumeId, 'language', language);
                }
            }

            // 수상 경력 데이터 처리
            for (const award of convertedAwards) {
                if (award.id) {
                    await updateResumeAward(award.id, award);
                } else {
                    await postResumeSection(resumeId, 'award', award);
                }
            }

            // 성공 메시지와 페이지 이동
            alert('저장이 완료되었습니다.');
            navigate('/resume');

            // 이전 코드들인데, 혹시 몰라 남겨두었습니다.
            //     educations,
            //     experiences,
            //     languages,
            //     awards,
            // };
            // if (
            //     selectedJob &&
            //     title &&
            //     educations[0].startDate &&
            //     educations[0].finishDate &&
            //     educations[0].name &&
            //     educations[0].major &&
            //     educations[0].degreeStatus
            // ) {
            //     const response = await NewResumeApi(resumeId, resumeData);
            //     if (!response || response.status !== 200) {
            //         throw new Error('Invalid response from server');
            //     }

            //     alert('저장이 완료되었습니다.');
            //     navigate('/resume');
            // } else {
            //     alert('필수 입력사항을 모두 입력해주세요!');
            //     return;
            // }
        } catch (err) {
            // 오류 처리
            alert('저장에 실패했습니다!');
            console.error(err);
        }
    };

    return (
        <>
            <S.Container>
                <S.Wrapper>
                    <PageTitle
                        text={isEdit ? '이력서 상세' : '새 이력서 작성하기'}
                    />
                    {/* 공개여부 토글 */}
                    <S.SwitchStyle>
                        <Switch
                            defaultChecked={false}
                            onChange={onChangeCheckbox}
                            checkedChildren='공개'
                            unCheckedChildren='비공개'
                            checked={check}
                        />
                    </S.SwitchStyle>

                    <S.TitleWapper>
                        <S.Title>이력서 제목</S.Title>
                        <S.Star>*</S.Star>
                    </S.TitleWapper>
                    <S.Input
                        type='text'
                        placeholder='제목을 입력하세요.'
                        defaultValue={title}
                        onChange={onChangeTitle}
                        maxLength='29'
                    />
                    <S.Count>
                        <span>({inputCount} </span>
                        <span> / 30)</span>
                    </S.Count>
                    <S.TitleWapper>
                        <S.Title>직무 선택</S.Title>
                        <S.Star>*</S.Star>
                    </S.TitleWapper>
                    <S.ShortInputWrapper>
                        <S.ShortInput
                            className='read-only'
                            type='text'
                            placeholder='직무를 입력하세요.'
                            value={selectedJob}
                            readOnly // 직접 입력을 막기 위해 readOnly 설정
                        />

                        <JobModal
                            isModalOpen={modalIsOpen}
                            closer={closeModal}
                            maintext={'직무 검색하기'}
                            onItemSelect={handleJobSelect}
                            data={job}
                        ></JobModal>
                        <S.FindBtn onClick={openModal}>직무 찾기</S.FindBtn>
                    </S.ShortInputWrapper>
                    <S.TitleWapper>
                        <S.Title>간단한 자기소개</S.Title>
                    </S.TitleWapper>
                    <S.GreenBox>
                        {
                            '• 본인의 업무 경험을 기반으로 핵심역량과 업무 스킬을 간단히 작성해주세요.\n• 3~5줄로 요약하여 작성하는 것을 추천합니다!'
                        }
                    </S.GreenBox>
                    <S.TextArea
                        type='text'
                        placeholder='자기소개를 입력하세요.'
                        value={introduction}
                        onChange={onChangeContent}
                        defaultValue={introduction}
                    />
                    {/* 학력 */}
                    <S.TitleContainer>
                        <S.TitleWrapper2>
                            <S.Title>학력</S.Title>
                            <S.Star>*</S.Star>
                        </S.TitleWrapper2>
                        <S.Plus onClick={addEducation}>+ 항목 추가</S.Plus>
                    </S.TitleContainer>
                    <S.GreenBox>{'• 최신순으로 작성해주세요.'}</S.GreenBox>
                    <S.Line />
                    {educations.map((education, index) => (
                        <div key={index} style={{ width: '39.3rem' }}>
                            <S.GrayBox>
                                <S.BoxLeft>
                                    <div>
                                        <S.SmallInput1
                                            type='text'
                                            placeholder='2000.00'
                                            onChange={e => {
                                                setStartDate(
                                                    e.target.value,
                                                    index,
                                                );
                                            }}
                                            defaultValue={
                                                isEdit
                                                    ? educations[index]
                                                          .startDate
                                                    : ''
                                            }
                                        />
                                        <span style={{ marginRight: '0.4rem' }}>
                                            -
                                        </span>
                                        <S.SmallInput1
                                            type='text'
                                            placeholder='2000.00'
                                            onChange={e =>
                                                setFinishDate(
                                                    e.target.value,
                                                    index,
                                                )
                                            }
                                            defaultValue={
                                                isEdit
                                                    ? educations[index]
                                                          .finishDate
                                                    : ''
                                            }
                                        />
                                    </div>
                                    <div>
                                        <S.Label
                                            htmlFor={`attendingCheckbox-${index}`}
                                        >
                                            <S.CheckBox
                                                type='checkbox'
                                                name={`degreeStatus-${index}`}
                                                checked={
                                                    education.degreeStatus ===
                                                    '재학중'
                                                }
                                                onChange={() =>
                                                    checkOnlyOne(
                                                        index,
                                                        '재학중',
                                                    )
                                                }
                                                id={`attendingCheckbox-${index}`}
                                            />
                                            <div style={{ width: '2rem' }}>
                                                재학중
                                            </div>
                                        </S.Label>
                                        <S.Label
                                            htmlFor={`leavingCheckbox-${index}`}
                                        >
                                            <S.CheckBox
                                                type='checkbox'
                                                name={`degreeStatus-${index}`}
                                                checked={
                                                    education.degreeStatus ===
                                                    '휴학중'
                                                }
                                                onChange={() =>
                                                    checkOnlyOne(
                                                        index,
                                                        '휴학중',
                                                    )
                                                }
                                                id={`leavingCheckbox-${index}`}
                                            />
                                            <div
                                                style={{
                                                    width: '2rem',
                                                }}
                                            >
                                                휴학중
                                            </div>
                                        </S.Label>
                                        <S.Label
                                            htmlFor={`graduateCheckbox-${index}`}
                                        >
                                            <S.CheckBox
                                                type='checkbox'
                                                name={`degreeStatus-${index}`}
                                                checked={
                                                    education.degreeStatus ===
                                                    '졸업'
                                                }
                                                onChange={() =>
                                                    checkOnlyOne(index, '졸업')
                                                }
                                                id={`graduateCheckbox-${index}`}
                                            />
                                            <div style={{ width: '2rem' }}>
                                                졸업
                                            </div>
                                        </S.Label>
                                    </div>
                                </S.BoxLeft>
                                <S.BoxRight>
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            width: '23.15rem',
                                        }}
                                    >
                                        <S.School
                                            type='text'
                                            placeholder='학교명'
                                            onChange={e =>
                                                setName(e.target.value, index)
                                            }
                                            defaultValue={
                                                isEdit
                                                    ? educations[index].name
                                                    : ''
                                            }
                                        />
                                        <S.SmallInput
                                            type='text'
                                            placeholder='전공 및 학위'
                                            onChange={e =>
                                                setMajor(e.target.value, index)
                                            }
                                            defaultValue={
                                                isEdit
                                                    ? educations[index].major
                                                    : ''
                                            }
                                        />
                                    </div>
                                    <S.RemoveBtn
                                        onClick={() => removeEducation(index)}
                                    >
                                        - 항목 삭제
                                    </S.RemoveBtn>
                                </S.BoxRight>
                            </S.GrayBox>
                        </div>
                    ))}
                    {/* 경력 */}
                    <S.TitleContainer2>
                        <S.TitleWrapper2>
                            <S.Title>경력</S.Title>
                        </S.TitleWrapper2>
                        <S.Plus onClick={addExperience}>+ 항목 추가</S.Plus>
                    </S.TitleContainer2>
                    <S.GreenBox>
                        {
                            '• 담당하신 업무 중 우선순위가 높은 업무를 선별하여 최신순으로 작성해주세요.\n• 신입의 경우, 직무와 관련된 대외활동, 인턴, 계약직 경력 등이 있다면 작성해주세요. \n• 업무 또는 활동 시 담당했던 역할과 과정, 성과에 대해 자세히 작성해주세요. \n• 업무 성과는 되도록 구체적인 숫자 혹은 [%]로 표현해주세요!'
                        }
                    </S.GreenBox>
                    <S.Line />
                    {Array(experiences.length)
                        .fill(1)
                        .map((_, index) => (
                            <div style={{ width: '39.3rem' }}>
                                <S.GrayBox>
                                    <S.BoxLeft>
                                        <div>
                                            <S.SmallInput1
                                                type='text'
                                                placeholder='2000.00'
                                                onChange={e =>
                                                    setStartDate2(
                                                        e.target.value,
                                                        index,
                                                    )
                                                }
                                                defaultValue={
                                                    isEdit
                                                        ? experiences[0]
                                                              .startDate
                                                        : ''
                                                }
                                            />
                                            <span
                                                style={{
                                                    marginRight: '0.4rem',
                                                }}
                                            >
                                                -
                                            </span>
                                            <S.SmallInput1
                                                type='text'
                                                placeholder='2000.00'
                                                onChange={e =>
                                                    setFinishDate2(
                                                        e.target.value,
                                                        index,
                                                    )
                                                }
                                                defaultValue={
                                                    isEdit
                                                        ? experiences[0]
                                                              .finishDate
                                                        : ''
                                                }
                                            />
                                        </div>
                                        <S.Label>
                                            <S.CheckBox
                                                type='checkbox'
                                                name='isAttending'
                                            />
                                            <div>재직중</div>
                                        </S.Label>
                                    </S.BoxLeft>
                                    <S.BoxRight>
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                width: '23.15rem',
                                            }}
                                        >
                                            <S.School
                                                type='text'
                                                placeholder='회사명'
                                                onChange={e =>
                                                    setDepartment(
                                                        e.target.value,
                                                        index,
                                                    )
                                                }
                                                defaultValue={
                                                    isEdit
                                                        ? experiences[0]
                                                              .department
                                                        : ''
                                                }
                                            />
                                            <S.SmallInput
                                                type='text'
                                                placeholder='부서명 / 직책'
                                                onChange={e =>
                                                    setPosition(
                                                        e.target.value,
                                                        index,
                                                    )
                                                }
                                                defaultValue={
                                                    isEdit
                                                        ? experiences[0]
                                                              .position
                                                        : ''
                                                }
                                            />
                                        </div>
                                        <S.RemoveBtn
                                            onClick={() =>
                                                removeExperience(index)
                                            }
                                        >
                                            - 항목 삭제
                                        </S.RemoveBtn>
                                    </S.BoxRight>
                                </S.GrayBox>
                            </div>
                        ))}

                    {/* 어학 */}
                    <S.TitleContainer2>
                        <S.TitleWrapper2>
                            <S.Title>어학</S.Title>
                        </S.TitleWrapper2>
                        <S.Plus onClick={addLanguage}>+ 항목 추가</S.Plus>
                    </S.TitleContainer2>
                    <S.GreenBox>
                        {
                            '• 외국어 자격증을 보유한 경우 작성해주세요. \n• 활용 가능한 외국어가 있다면, 어느정도 수준인지 레벨을 선택해주세요.'
                        }
                    </S.GreenBox>
                    <S.Line />
                    {Array(languages.length)
                        .fill(1)
                        .map((_, index) => (
                            <div style={{ width: '39.3rem' }}>
                                <S.GrayBox>
                                    <S.BoxLeft>
                                        <S.SmallInput
                                            type='text'
                                            placeholder='2000.00 (취득년월)'
                                            onChange={e =>
                                                setGainedDate(
                                                    e.target.value,
                                                    index,
                                                )
                                            }
                                            defaultValue={
                                                isEdit
                                                    ? languages[0].gainedDate
                                                    : ''
                                            }
                                        />
                                    </S.BoxLeft>
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            width: '23.15rem',
                                        }}
                                    >
                                        <S.School
                                            type='text'
                                            placeholder='언어'
                                            onChange={e =>
                                                setTestName(
                                                    e.target.value,
                                                    index,
                                                )
                                            }
                                            defaultValue={
                                                isEdit
                                                    ? languages[0].testName
                                                    : ''
                                            }
                                        />
                                        <S.SmallInput
                                            type='text'
                                            placeholder='어학시험명 / 급수'
                                            onChange={e =>
                                                setScore(e.target.value, index)
                                            }
                                            defaultValue={
                                                isEdit ? languages[0].score : ''
                                            }
                                        />
                                    </div>
                                    <S.RemoveBtn
                                        onClick={() => removeLanguage(index)}
                                    >
                                        - 항목 삭제
                                    </S.RemoveBtn>
                                </S.GrayBox>
                            </div>
                        ))}
                    {/* 수상 및 기타 */}
                    <S.TitleContainer2>
                        <S.TitleWrapper2>
                            <S.Title>수상 및 기타</S.Title>
                        </S.TitleWrapper2>
                        <S.Plus onClick={addAwards}>+ 항목 추가</S.Plus>
                    </S.TitleContainer2>
                    <S.GreenBox>
                        {
                            '• 수상 이력, 직무 관련 자격증, 수료한 교육이나 참석한 외부활동 등이 있다면 간략히 작성해주세요.\n• 지원하는 회사에서 요구하는 경우가 아니라면 운전면허증과 같은 자격증은 생략하는 것이 좋습니다!'
                        }
                    </S.GreenBox>

                    <S.Line />
                    {Array(awards.length)
                        .fill(1)
                        .map((_, index) => (
                            <div style={{ width: '39.3rem' }}>
                                <S.GrayBox>
                                    <S.BoxLeft style={{ flexDirection: 'row' }}>
                                        <S.SmallInput1
                                            type='text'
                                            placeholder='2000.00'
                                            onChange={e =>
                                                setStartDate3(
                                                    e.target.value,
                                                    index,
                                                )
                                            }
                                            defaultValue={
                                                isEdit
                                                    ? awards[0].startDate
                                                    : ''
                                            }
                                        />
                                        <span style={{ marginRight: '0.4rem' }}>
                                            -
                                        </span>
                                        <S.SmallInput1
                                            type='text'
                                            placeholder='2000.00'
                                            onChange={e =>
                                                setFinishDate3(
                                                    e.target.value,
                                                    index,
                                                )
                                            }
                                            defaultValue={
                                                isEdit
                                                    ? awards[0].finishDate
                                                    : ''
                                            }
                                        />
                                    </S.BoxLeft>
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            width: '23.15rem',
                                        }}
                                    >
                                        <S.School
                                            type='text'
                                            placeholder='활동명 / 대회명'
                                            onChange={e =>
                                                setActivity(
                                                    e.target.value,
                                                    index,
                                                )
                                            }
                                            defaultValue={
                                                isEdit ? awards[0].activity : ''
                                            }
                                        />
                                        <S.SmallInput
                                            type='text'
                                            placeholder='활동 내용 / 수상 내역'
                                            onChange={e =>
                                                setContent(
                                                    e.target.value,
                                                    index,
                                                )
                                            }
                                            defaultValue={
                                                isEdit ? awards[0].content : ''
                                            }
                                        />
                                    </div>
                                    <S.RemoveBtn
                                        onClick={() => removeAwards(index)}
                                    >
                                        - 항목 삭제
                                    </S.RemoveBtn>
                                </S.GrayBox>
                            </div>
                        ))}

                    {isEdit ? (
                        <GreenBtn
                            text={'이력서 수정'}
                            width={10.75}
                            paddingVertical={0.75}
                            paddingHorizontal={2.95}
                            top={6.4}
                            onClick={
                                onResumeSubmit
                            } /* @todo onUpdate 함수로 변경 */
                            height={2.7}
                            radius={5}
                        />
                    ) : (
                        <GreenBtn
                            text={'이력서 저장'}
                            width={10.75}
                            paddingVertical={0.75}
                            paddingHorizontal={2.95}
                            bottom={7.15}
                            top={6.4}
                            onClick={onResumeSubmit}
                            height={2.7}
                            radius={5}
                        />
                    )}
                </S.Wrapper>
            </S.Container>
        </>
    );
};

export default New;
