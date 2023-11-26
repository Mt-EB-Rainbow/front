import PageTitle from '../_common/PageTitle';
import GreenBtn from '../_common/Btn/GreenBtn';
import * as S from './LoginEmail.style';
import { useState } from 'react';
import { Signin } from '../../api/Signin';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { loginState } from '../../recoil/loginState';

const LoginEmail = () => {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const navigate = useNavigate();

    //recoil로 로그인 상태관리

    //로그인하기
    const Login = async e => {
        e.preventDefault();
        const res = await Signin(email, pw);

        navigate('/');
    };

    const goSignup = () => {
        navigate('/signup01');
    };
    return (
        <>
            <S.Wrapper>
                <S.Box>
                    <form onSubmit={Login}>
                        <PageTitle text={'로그인'} />
                        <S.InputWrapper>
                            <S.Text>이메일</S.Text>
                            <S.InputEmail
                                style={{ marginBottom: '20px' }}
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <S.Text>비밀번호</S.Text>
                            <S.InputEmail
                                value={pw}
                                onChange={e => setPw(e.target.value)}
                            />
                        </S.InputWrapper>

                        <GreenBtn
                            text={'이메일로 계속하기'}
                            paddingVertical={0.75}
                            paddingHorizontal={5.9}
                            width={19}
                            height={2.7}
                            radius={5}
                            bottom={0}
                            top={0}
                        />
                        <S.SignUpText onClick={goSignup}>
                            회원가입하기
                        </S.SignUpText>
                    </form>
                </S.Box>
            </S.Wrapper>
        </>
    );
};

export default LoginEmail;
