import { useNavigate } from 'react-router-dom';
import GreenBtn from '../_common/Btn/GreenBtn';
import * as S from './Signup03.style';
import PageTitle from '../_common/PageTitle';

const MentorSignup03 = () => {
    const message = `회원가입이 완료되었습니다!\n귀한 시간 내어 멘토링에 참여해주셔서 감사합니다 :)`;
    const navigate = useNavigate();

    const goMain = () => {
        navigate('/');
    };

    const goMentorBoards = () => {
        navigate('/mentorboards');
    };

    return (
        <>
            <S.Wrapper>
                <PageTitle text={'회원가입'} />
                <div style={{ height: '4rem' }}></div>
                <S.Text>{message}</S.Text>

                <S.BtnWrapper>
                    <GreenBtn
                        text={'이력서 목록 열람'}
                        paddingVertical={0.75}
                        paddingHorizontal={2.45}
                        width={10.75}
                        height={2.7}
                        onClick={goMentorBoards}
                        radius={5}
                    />
                    <S.GrayBtn onClick={goMain}>메인으로 돌아가기</S.GrayBtn>
                </S.BtnWrapper>
            </S.Wrapper>
        </>
    );
};

export default MentorSignup03;
