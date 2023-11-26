import GreenBtn from '../_common/Btn/GreenBtn';
import PageTitle from '../_common/PageTitle';
import * as S from './New.style';
import { useCallback, useEffect, useState } from 'react';
import { Switch } from 'antd';
import './Switch.css';
import { useNavigate, useParams } from 'react-router-dom';
import { NewResumeApi, getResumeContentApi } from '../../api/resume';
import { resumedata } from './mockData';
import JobModal from './Modal';

const New = ({ isEdit }) => {
    const { resumeId } = useParams();
    const navigate = useNavigate();
    const [inputCount, setInputCount] = useState(0);
    const [check, setCheck] = useState(false);

    // input data
    // 제목, 자기소개
    const [title, setTitle] = useState('');
    const [introduction, setIntroduction] = useState('');

    // 학력
    const initialEducation = {
        startDate: '',
        finishDate: '',
        name: '',
        major: '',
        degreeStatus: null,
    };
    const [educount, setEduCount] = useState(1);
    const [educations, setEducations] = useState(
        Array(educount).fill(initialEducation),
    );
    const [startDate, setStartDate] = useState('');
    const [startDateArr, setStartDateArr] = useState([]);
    const [finishDate, setFinishDate] = useState(Array());
    const [name, setName] = useState(Array());
    const [major, setMajor] = useState(Array(educount));

    // 경력
    const [exCount, setExCount] = useState(1);
    const [startDate2, setStartDate2] = useState('');
    const [finishDate2, setFinishDate2] = useState('');
    const [department, setDepartment] = useState('');
    const [position, setPosition] = useState('');
    const [experiences, setExperience] = useState(Array(exCount));

    // 어학
    const [lanCount, setLanCount] = useState(1);
    const [languages, setLanguages] = useState(Array(lanCount));
    const [gainedDate, setGainedDate] = useState('');
    const [testName, setTestName] = useState('');
    const [score, setScore] = useState('');

    // 수상
    const [awardCount, setAwardCount] = useState(1);
    const [awards, setAwards] = useState(Array(awardCount));
    const [startDate3, setStartDate3] = useState('');
    const [finishDate3, setFinishDate3] = useState('');
    const [activity, setActivity] = useState('');
    const [content, setContent] = useState('');

    // 모달 open
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {
        setModalIsOpen(!modalIsOpen);
    };

    const closer = () => {
        setModalIsOpen(!modalIsOpen);
    };

    //임시 데이터
    const data = [
        '보육교사',
        '상담사',
        '선생님',
        '요가강사',
        '연구원',
        '미용사',
    ];

    /////모달/////

    const onChangeTitle = e => {
        setTitle(e.target.value);
        setInputCount(e.target.value.length);
    };

    const onChangeContent = e => {
        setIntroduction(e.target.value);
    };
    const onChange = checked => {
        console.log(`switch to ${checked}`);
        setCheck(!check);
    };

    // 내용 post
    const onSubmit = async e => {
        e.preventDefault();

        try {
            const resumeData = {
                title: title,
                introduction: introduction,
                educations: educations.map(edu => ({
                    startDate: edu.startDate,
                    finishDate: edu.finishDate,
                    educationStatus: edu.degreeStatus, // degreeStatus 사용
                    name: edu.name,
                    major: edu.major,
                    degree: edu.degreeStatus, // degreeStatus 또는 다른 필드 사용
                })),
                experiences: experiences.map(exp => ({
                    startDate: exp.startDate2,
                    finishDate: exp.finishDate2,
                    isPresent: true,
                    department: exp.department,
                    position: exp.position,
                })),
                languages: languages.map(lang => ({
                    gainedDate: lang.gainedDate,
                    language: lang.language,
                    testName: lang.testName,
                    score: lang.score,
                })),
                awards: awards.map(award => ({
                    startDate: award.startDate3,
                    finishDate: award.finishDate3,
                    activity: award.activity,
                    content: award.content,
                })),
            };

            const response = await NewResumeApi(
                resumeId,
                resumeData.title,
                resumeData.introduction,
                resumeData.educations,
                resumeData.experiences,
                resumeData.languages,
                resumeData.awards,
            );
            console.log('Response:', response);
            alert('저장이 완료되었습니다.');
            window.scrollTo(0, 0);
            navigate('/resume');
        } catch (err) {
            console.log(err);
            alert('저장에 실패했습니다!');
        }
    };

    //받아온 내용 저장
    const [contentdata, setContentdata] = useState({});

    //내용 get
    useEffect(() => {
        const getContent = async () => {
            const res = await getResumeContentApi(resumeId);
            setContentdata(res);
            console.log(res);
        };
        getContent();
    }, []);

    // 학력 항목 추가
    const addEducation = () => {
        setEducations(prevEducations => [
            ...prevEducations,
            {
                startDate: '',
                finishDate: '',
                name: '',
                major: '',
                degreeStatus: null, // 여기서 초기값을 설정
            },
        ]);
    };

    // 경력 항목 추가
    const addExperience = () => {
        setExperience(prevExperience => [
            ...prevExperience,
            {
                startDate2: '',
                finishDate2: '',
                department: '',
                position: '',
            },
        ]);
    };

    // 언어 항목 추가
    const addLanguage = () => {
        setLanguages(prevLanguages => [
            ...prevLanguages,
            {
                gainedDate: '',
                testName: '',
                score: '',
            },
        ]);
    };

    // 수상 항목 추가
    const addAwards = () => {
        setAwards(prevAwards => [
            ...prevAwards,
            {
                startDate3: '',
                finishDate3: '',
                activity: '',
                content: '',
            },
        ]);
    };

    // 한 번에 하나만 체크
    const [degree, setDegree] = useState(null);

    const checkOnlyOne = (index, newDegreeStatus) => {
        setEducations(prevEducations =>
            prevEducations.map((edu, eduIndex) =>
                eduIndex === index
                    ? { ...edu, degreeStatus: newDegreeStatus }
                    : edu,
            ),
        );
    };

    // 직무 선택
    const [selectedJob, setSelectedJob] = useState(''); // 선택된 직무 상태

    const handleJobSelect = job => {
        setSelectedJob(job); // 선택된 직무를 상태에 저장
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
                            onChange={onChange}
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
                        defaultValue={contentdata.data?.title}
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
                            closer={closer}
                            maintext={'직무 검색하기'}
                            data={data}
                            onItemSelect={handleJobSelect}
                        ></JobModal>
                        <GreenBtn
                            text={'직무 찾기'}
                            width={10.75}
                            paddingHorizontal={2}
                            height={2.7}
                            radius={5}
                            onClick={openModal}
                        />
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
                        defaultValue={contentdata.data?.introduction}
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
                                            onChange={e =>
                                                setStartDate(e.target.value)
                                            }
                                            defaultValue={
                                                isEdit
                                                    ? contentdata.data
                                                          ?.educations[index]
                                                          .startDate
                                                    : ''
                                            }
                                        />
                                        <span>- </span>
                                        <S.SmallInput1
                                            type='text'
                                            placeholder='2000.00'
                                            onChange={e =>
                                                setFinishDate(e.target.value)
                                            }
                                            defaultValue={
                                                isEdit
                                                    ? contentdata.data
                                                          ?.educations[index]
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
                                            <div>재학중</div>
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
                                            <div>휴학중</div>
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
                                            <div>졸업</div>
                                        </S.Label>
                                    </div>
                                </S.BoxLeft>
                                <S.BoxRight>
                                    <S.School
                                        type='text'
                                        placeholder='학교명'
                                        onChange={e => setName(e.target.value)}
                                        defaultValue={
                                            isEdit
                                                ? contentdata.data?.educations[
                                                      index
                                                  ].name
                                                : ''
                                        }
                                    />
                                    <S.SmallInput
                                        type='text'
                                        placeholder='전공 및 학위'
                                        onChange={e => setMajor(e.target.value)}
                                        defaultValue={
                                            isEdit
                                                ? contentdata.data?.educations[
                                                      index
                                                  ].major
                                                : ''
                                        }
                                    />
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
                                                    )
                                                }
                                                defaultValue={
                                                    isEdit
                                                        ? contentdata.data
                                                              ?.experiences[0]
                                                              .startDate
                                                        : ''
                                                }
                                            />
                                            <span>- </span>
                                            <S.SmallInput1
                                                type='text'
                                                placeholder='2000.00'
                                                onChange={e =>
                                                    setFinishDate2(
                                                        e.target.value,
                                                    )
                                                }
                                                defaultValue={
                                                    isEdit
                                                        ? contentdata.data
                                                              ?.experiences[0]
                                                              .finishDate
                                                        : ''
                                                }
                                            />
                                        </div>
                                        <S.Label>
                                            <S.CheckBox
                                                type='checkbox'
                                                name='isAttending'
                                                // checked={degree === '졸업'}
                                                // onChange={() =>
                                                //     checkOnlyOne('졸업')
                                                // }
                                                // id='graduateCheckbox'
                                            />
                                            <div>재직중</div>
                                        </S.Label>
                                    </S.BoxLeft>
                                    <S.BoxRight>
                                        <S.School
                                            type='text'
                                            placeholder='회사명'
                                            onChange={e =>
                                                setDepartment(e.target.value)
                                            }
                                            defaultValue={
                                                isEdit
                                                    ? contentdata.data
                                                          ?.experiences[0]
                                                          .department
                                                    : ''
                                            }
                                        />
                                        <S.SmallInput
                                            type='text'
                                            placeholder='부서명 / 직책'
                                            onChange={e =>
                                                setPosition(e.target.value)
                                            }
                                            defaultValue={
                                                isEdit
                                                    ? contentdata.data
                                                          ?.experiences[0]
                                                          .position
                                                    : ''
                                            }
                                        />
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
                                    <div>
                                        <S.SmallInput
                                            type='text'
                                            placeholder='2000.00 (취득년월)'
                                            onChange={e =>
                                                setGainedDate(e.target.value)
                                            }
                                            defaultValue={
                                                isEdit
                                                    ? contentdata.data
                                                          ?.languages[0]
                                                          .gainedDate
                                                    : ''
                                            }
                                        />
                                        <S.School
                                            type='text'
                                            placeholder='언어'
                                            onChange={e =>
                                                setTestName(e.target.value)
                                            }
                                            defaultValue={
                                                isEdit
                                                    ? contentdata.data
                                                          ?.languages[0]
                                                          .testName
                                                    : ''
                                            }
                                        />
                                        <S.SmallInput
                                            type='text'
                                            placeholder='어학시험명 / 급수'
                                            onChange={e =>
                                                setScore(e.target.value)
                                            }
                                            defaultValue={
                                                isEdit
                                                    ? contentdata.data
                                                          ?.languages[0].score
                                                    : ''
                                            }
                                        />
                                    </div>
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
                                    <div>
                                        <S.SmallInput1
                                            type='text'
                                            placeholder='2000.00'
                                            onChange={e =>
                                                setStartDate3(e.target.value)
                                            }
                                            defaultValue={
                                                isEdit
                                                    ? contentdata.data
                                                          ?.awards[0].startDate
                                                    : ''
                                            }
                                        />
                                        <span>- </span>
                                        <S.SmallInput1
                                            type='text'
                                            placeholder='2000.00'
                                            onChange={e =>
                                                setFinishDate3(e.target.value)
                                            }
                                            defaultValue={
                                                isEdit
                                                    ? contentdata.data
                                                          ?.awards[0].finishDate
                                                    : ''
                                            }
                                        />
                                        <S.School
                                            type='text'
                                            placeholder='활동명 / 대회명'
                                            onChange={e =>
                                                setActivity(e.target.value)
                                            }
                                            defaultValue={
                                                isEdit
                                                    ? contentdata.data
                                                          ?.awards[0].activity
                                                    : ''
                                            }
                                        />
                                        <S.SmallInput
                                            type='text'
                                            placeholder='활동 내용 / 수상 내역'
                                            onChange={e =>
                                                setContent(e.target.value)
                                            }
                                            defaultValue={
                                                isEdit
                                                    ? contentdata.data
                                                          ?.awards[0].content
                                                    : ''
                                            }
                                        />
                                    </div>
                                </S.GrayBox>
                            </div>
                        ))}

                    <GreenBtn
                        text={'이력서 저장'}
                        width={10.75}
                        paddingVertical={0.75}
                        paddingHorizontal={2.95}
                        bottom={7.15}
                        top={6.4}
                        onClick={onSubmit}
                        height={2.7}
                        radius={5}
                    />
                </S.Wrapper>
            </S.Container>
        </>
    );
};

export default New;
