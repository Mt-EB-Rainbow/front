import { useNavigate } from 'react-router-dom';
import GreenBtn from '../_common/Btn/GreenBtn';
import * as S from './Signup03.style';
import PageTitle from '../_common/PageTitle';

const Signup03 = () => {
    const message = `회원가입이 완료되었습니다!\n당신의 새로운 시작을 응원합니다 :)`;
    const navigate = useNavigate();

    const goMain = () => {
        navigate('/');
    };

    const goRecommend = () => {
        navigate('/recommend');
    };

    return (
        <>
            <S.Wrapper>
                <PageTitle text={'회원가입'} />
                <div style={{ height: '4rem' }}></div>
                <S.Text>{message}</S.Text>

                <S.BtnWrapper>
                    <GreenBtn
                        text={'직무 추천받기'}
                        paddingVertical={0.75}
                        paddingHorizontal={2.45}
                        width={10.75}
                        height={2.7}
                        onClick={goRecommend}
                        radius={5}
                    />
                    <S.GrayBtn onClick={goMain}>메인으로 돌아가기</S.GrayBtn>
                </S.BtnWrapper>
            </S.Wrapper>
        </>
    );
};

export default Signup03;
