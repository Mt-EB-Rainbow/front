import PageTitle from '../_common/PageTitle';
import GreenBtn from '../_common/Btn/GreenBtn';
import * as S from './Login.style';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const goEmail = () => {
        navigate('/login/email');
    };

    const goSignup = () => {
        navigate('/signup01');
    };

    return (
        <>
            <S.Container>
                <S.Wrapper>
                    <PageTitle text={'로그인'} />
                    <S.InputWrapper>
                        <S.Text>이메일</S.Text>
                        <S.InputEmail />
                    </S.InputWrapper>
                    <GreenBtn
                        text={'이메일로 계속하기'}
                        padding={8.2}
                        width={26.25}
                        onClick={goEmail}
                    />
                    <S.SectionText>혹은</S.SectionText>
                    <S.LoginBtn>Gmail</S.LoginBtn>
                    <S.LoginBtn>Kakao</S.LoginBtn>
                    <S.SignUpText onClick={goSignup}>회원가입하기</S.SignUpText>
                </S.Wrapper>
            </S.Container>
        </>
    );
};

export default Login;
