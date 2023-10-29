import { useNavigate } from 'react-router-dom';
import GreenBtn from '../_common/Btn/GreenBtn';
import SignupHeader from './SignupHeader';
import * as S from './Signup03.style';

const Signup03 = () => {
    const navigate = useNavigate();

    const goMain = () => {
        navigate('/');
    };

    const goInformation = () => {
        navigate('/userInfo');
    };

    return (
        <>
            <S.Wrapper>
                <div style={{ height: '5.9vh' }}></div>
                <SignupHeader />
                <S.Text>회원가입이 모두 완료되었습니다!</S.Text>
                <S.BtnWrapper>
                    <GreenBtn
                        text={'맞춤 정보 입력하기'}
                        width={15}
                        padding={2}
                        onClick={goInformation}
                    />
                    <S.GrayBtn onClick={goMain}>메인으로 돌아가기</S.GrayBtn>
                </S.BtnWrapper>
            </S.Wrapper>
        </>
    );
};

export default Signup03;
