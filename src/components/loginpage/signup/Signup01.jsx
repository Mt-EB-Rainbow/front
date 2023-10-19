import styled from 'styled-components';
import SignupHeader from './SignupHeader';
import GreenBtn from '../../_common/Btn/GreenBtn';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();

    const onClickNext = () => {
        navigate('/signup02');
    };

    return (
        <>
            <Wrapper>
                <SignupHeader />
                <H3>아래의 필수 약관에 동의해주세요.</H3>

                <GrayBox>
                    <BoxLeftText>
                        개인 정보 수집 및 이용에 관한 동의
                    </BoxLeftText>
                    <input
                        type='checkbox'
                        style={{ width: '15px', height: '15px' }}
                    />
                    <BoxRightText>동의</BoxRightText>
                </GrayBox>
                <GreenBtn text={'다음'} padding={273} onClick={onClickNext} />
            </Wrapper>
        </>
    );
};

export default Signup;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: calc(100vh - 180.8px);
`;

export const H3 = styled.div`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
    display: flex;
    justify-content: start;
    width: 582px;
`;

export const GrayBox = styled.div`
    background-color: var(--pale-gray);
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: calc(582px - 32px);
    height: calc(40px - 22px);
    border-radius: 8px;
    margin-bottom: 10px;

    padding: 11px 16px 11px 16px;
`;

export const BoxLeftText = styled.span`
    font-size: 16px;
    font-weight: 300;
`;
export const BoxRightText = styled.div`
    font-size: 16px;
    font-weight: 300;
    color: var(--dark-gray);
`;
