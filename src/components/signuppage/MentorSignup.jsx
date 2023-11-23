import * as S from './MentorSignup.style';
import PageTitle from '../_common/PageTitle';
import GreenBtn from '../_common/Btn/GreenBtn';
import { useState } from 'react';
import { Select } from 'antd';
import { useNavigate } from 'react-router-dom';

const MentorSignup = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [birth, setBirth] = useState('');

    const go03 = () => {
        navigate('/mentorsignup03');
    };

    return (
        <>
            <S.Container>
                <S.Wrapper>
                    <PageTitle text={'회원가입'} />
                    <div style={{ height: '3rem' }}></div>

                    <S.Text>이름</S.Text>
                    <S.InputText
                        type='text'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

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
                    <S.Text>직무</S.Text>
                    <Select
                        defaultValue='직무를 선택해 주세요'
                        style={{
                            width: '29.1rem',
                            height: '2.7rem',
                            fontSize: '1rem',
                        }}
                    />
                    <GreenBtn
                        text={'다음'}
                        paddingVertical={0.75}
                        paddingHorizontal={13.75}
                        width={29.1}
                        height={2.7}
                        radius={5}
                        top={2}
                        bottom={4}
                        onClick={go03}
                    />
                </S.Wrapper>
            </S.Container>
        </>
    );
};

export default MentorSignup;
