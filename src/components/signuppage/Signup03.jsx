import { useNavigate } from 'react-router-dom';
import GreenBtn from '../_common/Btn/GreenBtn';
import SignupHeader from './SignupHeader';
import styled from 'styled-components';

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
            <Wrapper>
                <div style={{ height: '5.9vh' }}></div>
                <SignupHeader />
                <Text>회원가입이 모두 완료되었습니다!</Text>
                <BtnWrapper>
                    <GreenBtn
                        text={'맞춤 정보 입력하기'}
                        width={15}
                        padding={2}
                        onClick={goInformation}
                    />
                    <GrayBtn onClick={goMain}>메인으로 돌아가기</GrayBtn>
                </BtnWrapper>
            </Wrapper>
        </>
    );
};

export default Signup03;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

export const Text = styled.div`
    font-size: 2.2vh;
    font-weight: 600;
    margin-bottom: 3.7vh;
`;

export const BtnWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 5vh;
    width: 31vw;
    justify-content: space-between;
`;

export const GrayBtn = styled.button`
    width: 15vw;
    height: 5vh;
    color: var(--dark-gray);
    padding: 1.4vh 2vw 1.4vh 2vw;
    border: 0.1em solid var(--gray);
    font-size: 1.8vh;
    font-weight: 500;
    border-radius: 90vh;
    font-family: var(--korean);
    font-weight: 600;
    background-color: white;
    margin-bottom: 1.8vh;
    cursor: pointer;
`;
