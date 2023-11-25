import GreenBtn from '../_common/Btn/GreenBtn';
import PageTitle from '../_common/PageTitle';
import * as S from './New.style';
import { useCallback, useEffect, useState } from 'react';
import { Switch } from 'antd';
import './Switch.css';
import { useNavigate, useParams } from 'react-router-dom';
import { NewResumeApi, getResumeContentApi } from '../../api/resume';
import { resumedata } from './mockData';

const New = ({ isEdit }) => {
    const { resumeId } = useParams();
    const navigate = useNavigate();
    const [inputCount, setInputCount] = useState(0);
    const [check, setCheck] = useState(false);

    // input data
    // 제목, 자기소개
    const [title, setTitle] = useState('');
    const [introduction, setIntroduction] = useState('');

    const [educount, seteduCount] = useState(1);
    // 학력
    const [educations, setEducations] = useState(Array(educount));

    const [startDate, setStartDate] = useState('');
    const [startDateArr, setStartDateArr] = useState([]);

    const [finishDate, setFinishDate] = useState(Array());
    const [name, setName] = useState(Array());
    const [major, setMajor] = useState(Array(educount));

    //새로운 학력 추가
    const onCreate = (startDate, finishDate, name, major) => {
        // const create_date = new Date().getTime();  //날짜 객체 생성

        const newEducation = {
            //새로운 객체 생성
            startDate: startDate,
            finishDate: finishDate,
            name: name,
            major: major,
        };

        setEducations([newEducation, ...educations]);
        //원래있던 data를 나열해주고 그후 새로운 데이터를 추가한다.
        seteduCount(educount + 1);
    };

    // 배열의 특정 인덱스의 값을 변경하는 함수

    const setEducationIndex = (index, value) => {
        setEducations(prevState => {
            const newState = [...prevState];
            newState[index] = value;
            return newState;
        });
    };

    // 경력

    const [startDate2, setStartDate2] = useState('');
    const [finishDate2, setFinishDate2] = useState('');
    const [department, setDepartment] = useState('');
    const [position, setPosition] = useState('');
    const [experiences, setExperience] = useState([]);

    // 어학
    const [languages, setLaguages] = useState([]);
    const [gainedDate, setGainedDate] = useState('');
    const [testName, setTestName] = useState('');
    const [score, setScore] = useState('');

    // 수상
    const [awards, setAwards] = useState([]);
    const [startDate3, setStartDate3] = useState('');
    const [finishDate3, setFinishDate3] = useState('');
    const [activity, setActivity] = useState('');
    const [content, setContent] = useState('');

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

    // console.log(resumedata.educations);

    // 내용 post
    const onSubmit = async e => {
        e.preventDefault();

        const res = await NewResumeApi(
            resumeId,
            title,
            introduction,
            resumedata.educations,
            resumedata.experiences,
            resumedata.languages,
            resumedata.awards,
        );
        console.log(res);
        window.scrollTo(0, 0);
        navigate('/resume');
        alert('저장이 완료되었습니다.');
    };

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
                            type='text'
                            placeholder='직무를 입력하세요.'
                        />
                        <GreenBtn
                            text={'직무 찾기'}
                            width={10.75}
                            paddingHorizontal={2}
                            height={2.7}
                            radius={5}
                        />
                    </S.ShortInputWrapper>
                    <S.TitleWapper>
                        <S.Title>간단한 자기소개</S.Title>
                    </S.TitleWapper>
                    <S.GreenBox>
                        제1항의 지시를 받은 당해 행정기관은 이에 응하여야 한다.
                        위원은 정당에 가입하거나 정치에 관여할 수 없다. 위원은
                        정당에 가입하거나 정치에 관여할 수 없다. 공무원의 직무상
                        불법행위로 손해를 받은 국민은 법률이 정하는 바에 의하여
                        국가 또는 공공단체에 정당한 배상을 청구할 수 있다. 이
                        경우 공무원 자신의 책임은 면제되지 아니한다.
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
                        <S.Plus onClick={onCreate}>+ 항목 추가</S.Plus>
                    </S.TitleContainer>
                    <S.GreenBox>
                        제1항의 지시를 받은 당해 행정기관은 이에 응하여야 한다.
                        위원은 정당에 가입하거나 정치에 관여할 수 없다.
                    </S.GreenBox>
                    <S.Line />
                    {Array(educations.length)
                        .fill(1)
                        .map((_, index) => (
                            <div style={{ width: '39.3rem' }}>
                                <S.GrayBox>
                                    <div>
                                        <S.SmallInput1
                                            type='text'
                                            placeholder='2000.00'
                                            onChange={e =>
                                                setStartDate(e.target.value)
                                            }
                                            defaultValue={
                                                contentdata.data?.educations[
                                                    index
                                                ].startDate
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
                                                contentdata.data?.educations[
                                                    index
                                                ].finishDate
                                            }
                                        />
                                        <S.School
                                            type='text'
                                            placeholder='학교명'
                                            onChange={e =>
                                                setName(e.target.value)
                                            }
                                            defaultValue={
                                                contentdata.data?.educations[
                                                    index
                                                ].name
                                            }
                                        />
                                        <S.SmallInput
                                            type='text'
                                            placeholder='전공 및 학위'
                                            onChange={e =>
                                                setMajor(e.target.value)
                                            }
                                            defaultValue={
                                                contentdata.data?.educations[
                                                    index
                                                ].major
                                            }
                                        />
                                    </div>
                                </S.GrayBox>
                            </div>
                        ))}
                    {/* 경력 */}
                    <S.TitleContainer2>
                        <S.TitleWrapper2>
                            <S.Title>경력</S.Title>
                        </S.TitleWrapper2>
                        <S.Plus>+ 항목 추가</S.Plus>
                    </S.TitleContainer2>
                    <S.GreenBox>
                        제1항의 지시를 받은 당해 행정기관은 이에 응하여야 한다.
                        위원은 정당에 가입하거나 정치에 관여할 수 없다. 위원은
                        정당에 가입하거나 정치에 관여할 수 없다. 공무원의 직무상
                        불법행위로 손해를 받은 국민은 법률이 정하는 바에 의하여
                        국가 또는 공공단체에 정당한 배상을 청구할 수 있다. 이
                        경우 공무원 자신의 책임은 면제되지 아니한다.
                    </S.GreenBox>
                    <S.Line />
                    <S.GrayBox>
                        <div>
                            <S.SmallInput1
                                type='text'
                                placeholder='2000.00'
                                onChange={e => setStartDate2(e.target.value)}
                                defaultValue={
                                    contentdata.data?.experiences[0].startDate
                                }
                            />
                            <span>- </span>
                            <S.SmallInput1
                                type='text'
                                placeholder='2000.00'
                                onChange={e => setFinishDate2(e.target.value)}
                                defaultValue={
                                    contentdata.data?.experiences[0].finishDate
                                }
                            />
                            <S.School
                                type='text'
                                placeholder='회사명'
                                onChange={e => setDepartment(e.target.value)}
                                defaultValue={
                                    contentdata.data?.experiences[0].department
                                }
                            />
                            <S.SmallInput
                                type='text'
                                placeholder='부서명 / 직책'
                                onChange={e => setPosition(e.target.value)}
                                defaultValue={
                                    contentdata.data?.experiences[0].position
                                }
                            />
                        </div>
                    </S.GrayBox>
                    {/* 어학 */}
                    <S.TitleContainer2>
                        <S.TitleWrapper2>
                            <S.Title>어학</S.Title>
                        </S.TitleWrapper2>
                        <S.Plus>+ 항목 추가</S.Plus>
                    </S.TitleContainer2>
                    <S.GreenBox>
                        제1항의 지시를 받은 당해 행정기관은 이에 응하여야 한다.
                        위원은 정당에 가입하거나 정치에 관여할 수 없다. 위원은
                        정당에 가입하거나 정치에 관여할 수 없다. 공무원의 직무상
                        불법행위로 손해를 받은 국민은 법률이 정하는 바에 의하여
                        국가 또는 공공단체에 정당한 배상을 청구할 수 있다. 이
                        경우 공무원 자신의 책임은 면제되지 아니한다.
                    </S.GreenBox>
                    <S.Line />
                    <S.GrayBox>
                        <div>
                            <S.SmallInput
                                type='text'
                                placeholder='2000.00 (취득년월)'
                                onChange={e => setGainedDate(e.target.value)}
                                defaultValue={
                                    contentdata.data?.languages[0].gainedDate
                                }
                            />
                            <S.School
                                type='text'
                                placeholder='언어'
                                onChange={e => setTestName(e.target.value)}
                                defaultValue={
                                    contentdata.data?.languages[0].testName
                                }
                            />
                            <S.SmallInput
                                type='text'
                                placeholder='어학시험명 / 급수'
                                onChange={e => setScore(e.target.value)}
                                defaultValue={
                                    contentdata.data?.languages[0].score
                                }
                            />
                        </div>
                    </S.GrayBox>
                    {/* 수상 및 기타 */}
                    <S.TitleContainer2>
                        <S.TitleWrapper2>
                            <S.Title>수상 및 기타</S.Title>
                        </S.TitleWrapper2>
                        <S.Plus>+ 항목 추가</S.Plus>
                    </S.TitleContainer2>
                    <S.GreenBox>
                        제1항의 지시를 받은 당해 행정기관은 이에 응하여야 한다.
                        위원은 정당에 가입하거나 정치에 관여할 수 없다. 위원은
                        정당에 가입하거나 정치에 관여할 수 없다. 공무원의 직무상
                        불법행위로 손해를 받은 국민은 법률이 정하는 바에 의하여
                        국가 또는 공공단체에 정당한 배상을 청구할 수 있다. 이
                        경우 공무원 자신의 책임은 면제되지 아니한다.
                    </S.GreenBox>

                    <S.Line />
                    <S.GrayBox>
                        <div>
                            <S.SmallInput1
                                type='text'
                                placeholder='2000.00'
                                onChange={e => setStartDate3(e.target.value)}
                                defaultValue={
                                    contentdata.data?.awards[0].startDate
                                }
                            />
                            <span>- </span>
                            <S.SmallInput1
                                type='text'
                                placeholder='2000.00'
                                onChange={e => setFinishDate3(e.target.value)}
                                defaultValue={
                                    contentdata.data?.awards[0].finishDate
                                }
                            />
                            <S.School
                                type='text'
                                placeholder='활동명 / 대회명'
                                onChange={e => setActivity(e.target.value)}
                                defaultValue={
                                    contentdata.data?.awards[0].activity
                                }
                            />
                            <S.SmallInput
                                type='text'
                                placeholder='활동 내용 / 수상 내역'
                                onChange={e => setContent(e.target.value)}
                                defaultValue={
                                    contentdata.data?.awards[0].content
                                }
                            />
                        </div>
                    </S.GrayBox>
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
