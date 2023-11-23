import { useNavigate } from 'react-router-dom';
import GreenBtn from '../_common/Btn/GreenBtn';
import PageTitle from '../_common/PageTitle';
import * as S from './Signup01.style';

const Signup01 = () => {
    const navigate = useNavigate();

    const goSignup = () => {
        navigate('/signup02');
    };
    const goMentorSignup = () => {
        navigate('/mentorsignup');
    };
    return (
        <>
            <S.Container>
                <S.Wrapper>
                    <PageTitle text={'회원가입'} />

                    <GreenBtn
                        text={'구직자 회원가입'}
                        width={18}
                        paddingHorizontal={4.25}
                        paddingVertical={0.77}
                        height={3.2}
                        bottom={2.3}
                        top={3.15}
                        onClick={goSignup}
                        radius={1}
                    />
                    <GreenBtn
                        text={'멘토 회원가입'}
                        width={18}
                        paddingHorizontal={4.25}
                        paddingVertical={0.77}
                        height={3.2}
                        radius={1}
                        onClick={goMentorSignup}
                    />
                </S.Wrapper>
            </S.Container>
        </>
    );
};

export default Signup01;
