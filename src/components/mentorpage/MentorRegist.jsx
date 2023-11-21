import PageTitle from '../_common/PageTitle';
import GreenBtn from '../_common/Btn/GreenBtn';
import * as S from './MentorRegist.style';

const MentorRegist = () => {
    return (
        <>
            <S.Wrapper>
                <PageTitle text={'멘토 등록'} />
                <div style={{ marginTop: '9.2vh' }}>
                    {/* 닉네임 defaultValue, readOnly */}
                    <S.Text>닉네임</S.Text>
                    <S.InputName />
                </div>

                <S.Text>한 줄 소개</S.Text>
                <S.InputText placeholder='한 줄 소개를 입력해주세요.' />
                <S.Text>회사명</S.Text>
                <S.InputText placeholder='재직중인 회사명을 입력해주세요.' />
                <S.Text>직군</S.Text>
                <S.InputText placeholder='재직중인 직군을 입력해주세요.' />

                <S.Text>연락처</S.Text>
                <S.Box>
                    <S.CheckWrapper>
                        <S.Check>
                            <input type='radio' />
                            <S.CheckText>휴대폰 번호</S.CheckText>
                        </S.Check>
                        <S.Check>
                            <input type='radio' />
                            <S.CheckText>이메일 주소</S.CheckText>
                        </S.Check>
                        <S.Check>
                            <input type='radio' />
                            <S.CheckText>카카오톡 아이디</S.CheckText>
                        </S.Check>
                    </S.CheckWrapper>
                </S.Box>

                <S.Text>직무와 일치하지 않는 경우 연락 가능한 범위</S.Text>
                <S.Box>
                    <S.CheckWrapper2>
                        <S.CheckText>
                            <S.Radio type='radio' />{' '}
                            <span>같은 직무일 경우만 가능</span>
                        </S.CheckText>
                        <S.CheckText>
                            <S.Radio type='radio' />{' '}
                            <span>직무가 달라도 동종 업계일 경우 가능</span>
                        </S.CheckText>
                    </S.CheckWrapper2>
                </S.Box>

                <GreenBtn
                    text={'멘토 등록'}
                    bottom={9.2}
                    width={15}
                    padding={4.5}
                />
            </S.Wrapper>
        </>
    );
};

export default MentorRegist;
