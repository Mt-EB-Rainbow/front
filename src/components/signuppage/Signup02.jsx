import { useNavigate } from 'react-router-dom';
import GreenBtn from '../_common/Btn/GreenBtn';
import SignupHeader from './SignupHeader';
import * as S from './Signup02.style';
import { useState } from 'react';
import { SignApi } from '../../api/Signup';

const Signup02 = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [birth, setBirth] = useState('');

    const navigate = useNavigate();

    //회원가입하기
    const Sign = async e => {
        e.preventDefault();
        const res = await SignApi(name, email, pw, nickname, birth);
        console.log(res);
        window.scrollTo(0, 0);
        navigate('/signup03');
    };

    return (
        <>
            <S.Wrapper>
                <SignupHeader />
                <form onSubmit={Sign}>
                    <S.NameWrapper>
                        <S.InputWrapper02>
                            <S.TextName>이름</S.TextName>
                            <S.InputName
                                type='text'
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </S.InputWrapper02>
                        <S.InputWrapper02>
                            <S.TextName>닉네임</S.TextName>
                            <S.InputName
                                value={nickname}
                                onChange={e => setNickname(e.target.value)}
                            />
                        </S.InputWrapper02>
                    </S.NameWrapper>
                    <S.Text>이메일</S.Text>
                    <S.InputText
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <S.Text>비밀번호</S.Text>
                    <S.InputText
                        type='password'
                        value={pw}
                        onChange={e => setPw(e.target.value)}
                    />
                    <S.Text>비밀번호 재확인</S.Text>
                    <S.InputText type='password' />
                    <S.Text>생년월일</S.Text>
                    <S.InputText
                        placeholder='YYYY-MM-DD'
                        value={birth}
                        onChange={e => setBirth(e.target.value)}
                    />
                    <div style={{ marginTop: '6.5vh' }}></div>
                    <GreenBtn
                        text={'다음'}
                        paddingVertical={0.75}
                        paddingHorizontal={13.75}
                        width={29.1}
                        height={2.7}
                        onClick={Sign}
                        radius={5}
                    />
                </form>
            </S.Wrapper>
        </>
    );
};

export default Signup02;
