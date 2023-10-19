import PageTitle from '../_common/PageTitle';
import GreenBtn from '../_common/Btn/GreenBtn';
import * as S from './LoginEmail.style';

const LoginEmail = () => {
    return (
        <>
            <S.Wrapper>
                <PageTitle text={'로그인'} />
                <S.InputWrapper>
                    <S.Text>이메일</S.Text>
                    <S.InputEmail style={{ marginBottom: '20px' }} />
                    <S.Text>비밀번호</S.Text>
                    <S.InputEmail />
                </S.InputWrapper>

                <GreenBtn text={'로그인'} padding={161} />
            </S.Wrapper>
        </>
    );
};

export default LoginEmail;
