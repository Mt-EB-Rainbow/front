import * as S from './Signup01.style';
import SignupHeader from './SignupHeader';
import GreenBtn from '../_common/Btn/GreenBtn';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();

    const onClickNext = () => {
        navigate('/signup02');
    };

    return (
        <>
            <S.Wrapper>
                <SignupHeader />
                <S.H3>아래의 필수 약관에 동의해주세요.</S.H3>

                <S.GrayBox>
                    <S.BoxLeftText>
                        개인 정보 수집 및 이용에 관한 동의
                    </S.BoxLeftText>
                    <input
                        type='checkbox'
                        style={{ width: '1.8vh', height: '1.8vh' }}
                    />
                    <S.BoxRightText>동의</S.BoxRightText>
                </S.GrayBox>
                <S.GrayBox>
                    <S.BoxLeftText>
                        개인 정보 수집 및 이용에 관한 동의
                    </S.BoxLeftText>
                    <input
                        type='checkbox'
                        style={{ width: '1.8vh', height: '1.8vh' }}
                    />
                    <S.BoxRightText>동의</S.BoxRightText>
                </S.GrayBox>
                <GreenBtn
                    text={'다음'}
                    paddingVertical={0.75}
                    paddingHorizontal={13.75}
                    width={29.1}
                    height={2.7}
                    onClick={onClickNext}
                    radius={5}
                />
            </S.Wrapper>
        </>
    );
};

export default Signup;
