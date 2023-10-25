import { useNavigate } from 'react-router-dom';
import GreenBtn from '../_common/Btn/GreenBtn';
import SignupHeader from './SignupHeader';
import * as S from './Signup02.style';

const Signup02 = () => {
    const navigate = useNavigate();
    const onClickNext = () => {
        window.scrollTo(0, 0);
        navigate('/signup03');
    };

    return (
        <>
            <S.Wrapper>
                <SignupHeader />

                <S.NameWrapper>
                    <S.InputWrapper02>
                        <S.TextName>이름</S.TextName>
                        <S.InputName />
                    </S.InputWrapper02>
                    <S.InputWrapper02>
                        <S.TextName>닉네임</S.TextName>
                        <S.InputName />
                    </S.InputWrapper02>
                </S.NameWrapper>
                <S.Text>이메일</S.Text>
                <S.InputText />
                <S.Text>비밀번호</S.Text>
                <S.InputText />
                <S.Text>비밀번호 재확인</S.Text>
                <S.InputText type='password' />
                <S.Text>생년월일</S.Text>
                <S.InputText placeholder='YYYY-MM-DD' />
                <div style={{ marginTop: '6.5vh' }}></div>
                <GreenBtn
                    text={'다음'}
                    width={40.4}
                    padding={10}
                    onClick={onClickNext}
                />
            </S.Wrapper>
        </>
    );
};

export default Signup02;
