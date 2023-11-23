import GreenBtn from '../_common/Btn/GreenBtn';
import PageTitle from '../_common/PageTitle';
import * as S from './New.style';
import { useState } from 'react';
import { Switch } from 'antd';
import './Switch.css';
import { useNavigate } from 'react-router-dom';

const New = ({ isEdit }) => {
    const navigate = useNavigate();
    const [inputCount, setInputCount] = useState(0);
    const [check, setCheck] = useState(false);
    const [education, setEducation] = useState(1);

    // input data
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onChangeTitle = e => {
        setTitle(e.target.value);
        setInputCount(e.target.value.length);
    };

    const onChangeContent = e => {
        setContent(e.target.value);
    };
    const onChange = checked => {
        console.log(`switch to ${checked}`);
        setCheck(!check);
    };

    const addBox = () => {
        setEducation(education + 1);
    };

    const onSubmit = () => {
        if (title && content) {
            //  백엔드로 post

            // const result = await createBoard({
            //   variables: {
            //     createBoardInput: {
            //       writer: name,
            //       password, //key값이랑 value 값이 같으면 하나만 써줘도 된다.
            //       title, // 이걸 shorthand-property 라고 한다.
            //       contents: content,
            //     },
            //   },
            // });
            // console.log(result);
            navigate('/resume');
            //작성한 result의 data의 메소드의 id 값을 푸쉬해줄 주소로 넣어준다}

            alert('저장이 완료되었습니다.');
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
                        onChange={onChangeTitle}
                        maxLength='29'
                        value={title}
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
                            padding={2}
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
                        value={content}
                        onChange={onChangeContent}
                    />
                    {/* 학력 */}
                    <S.TitleContainer>
                        <S.TitleWrapper2>
                            <S.Title>학력</S.Title>
                            <S.Star>*</S.Star>
                        </S.TitleWrapper2>
                        <S.Plus onClick={addBox}>+ 항목 추가</S.Plus>
                    </S.TitleContainer>
                    <S.GreenBox>
                        제1항의 지시를 받은 당해 행정기관은 이에 응하여야 한다.
                        위원은 정당에 가입하거나 정치에 관여할 수 없다.
                    </S.GreenBox>
                    <S.Line />
                    {Array(education)
                        .fill(1)
                        .map(el => (
                            <div style={{ width: '39.3rem' }}>
                                <S.GrayBox>
                                    <div>
                                        <S.SmallInput
                                            type='text'
                                            placeholder='2000.00 - 2000.00'
                                        />
                                        <S.School
                                            type='text'
                                            placeholder='학교명'
                                        />
                                        <S.SmallInput
                                            type='text'
                                            placeholder='전공 및 학위'
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
                    <GreenBtn
                        text={'이력서 저장'}
                        width={10.75}
                        padding={2.95}
                        bottom={7.15}
                        top={6.4}
                        onClick={onSubmit}
                    />
                </S.Wrapper>
            </S.Container>
        </>
    );
};

export default New;
