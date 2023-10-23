import { useNavigate } from 'react-router-dom';
import GreenBtn from '../_common/Btn/GreenBtn';
import SignupHeader from './SignupHeader';
import styled from 'styled-components';

const Signup02 = () => {
    const navigate = useNavigate();
    const onClickNext = () => {
        window.scrollTo(0, 0);
        navigate('/signup03');
    };

    return (
        <>
            <Wrapper>
                <SignupHeader />

                <NameWrapper>
                    <InputWrapper02>
                        <TextName>이름</TextName>
                        <InputName />
                    </InputWrapper02>
                    <InputWrapper02>
                        <TextName>닉네임</TextName>
                        <InputName />
                    </InputWrapper02>
                </NameWrapper>
                <Text>이메일</Text>
                <InputText />
                <Text>비밀번호</Text>
                <InputText />
                <Text>비밀번호 재확인</Text>
                <InputText type='password' />
                <Text>생년월일</Text>
                <InputText placeholder='YYYY-MM-DD' />
                <div style={{ marginTop: '6.5vh' }}></div>
                <GreenBtn
                    text={'다음'}
                    width={40.4}
                    padding={10}
                    onClick={onClickNext}
                />
            </Wrapper>
        </>
    );
};

export default Signup02;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

export const TextName = styled.div`
    font-size: 1.5vh;
    font-weight: 600;
    display: flex;
    justify-content: start;
    width: 19.8vw;
    margin-bottom: 0.9vh;
`;

export const InputName = styled.input`
    width: 19.8vw;
    height: 5vh;
    border: 0.1em solid var(--gray);
    font: 1.5vh;
    outline: none;
    border-radius: 1.1vh;
    margin-bottom: 1.9vh;
    box-sizing: border-box;
    padding: 1.5vh;
`;

export const NameWrapper = styled.div`
    display: flex;
`;

export const InputWrapper02 = styled.div`
    margin-right: 0.4vw;
    margin-left: 0.4vw;
`;

export const InputText = styled.input`
    width: 40.4vw;
    height: 5vh;
    border: 0.1em solid var(--gray);
    font: 1.5vh;
    outline: none;
    border-radius: 1.1vh;
    margin-bottom: 1.9vh;
    box-sizing: border-box;
    padding: 1.5vh;
`;

export const Text = styled.div`
    font-size: 1.5vh;
    font-weight: 600;
    display: flex;
    justify-content: start;
    width: 40.4vw;
    margin-bottom: 0.9vh;
`;
