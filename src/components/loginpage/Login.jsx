import PageTitle from '../_common/PageTitle';
import GreenBtn from '../_common/Btn/GreenBtn';
import * as S from './Login.style';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    const navigate = useNavigate();
    const goEmail = () => {
        navigate('/login/email');
    };

    const goSignup = () => {
        navigate('/signup02');
    };

    return (
        <>
            <S.Container>
                <S.Wrapper>
                    <PageTitle text={'로그인'} />
                    <S.InputWrapper>
                        <S.Text>이메일</S.Text>
                        <S.InputEmail
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </S.InputWrapper>
                    <GreenBtn
                        text={'이메일로 계속하기'}
                        paddingVertical={0.75}
                        paddingHorizontal={5.9}
                        width={19}
                        height={2.7}
                        onClick={goEmail}
                        radius={5}
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
