import WhiteBtn from '../_common/Btn/WhiteBtn';
import PageTitle from '../_common/PageTitle';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const GoLogin = () => {
    const navigate = useNavigate();

    const goLogin = () => {
        navigate('/login');
    };
    return (
        <>
            <Container>
                <Wrapper>
                    <PageTitle text={'내 이력서 관리'} />
                    <Text>로그인 / 회원가입이 필요합니다.</Text>
                    <WhiteBtn
                        text={'로그인 / 회원가입 하러 가기'}
                        onClick={goLogin}
                    />
                </Wrapper>
            </Container>
        </>
    );
};

export default GoLogin;

const Text = styled.div`
    color: var(--Dark-Gray, #767676);
    text-align: center;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 9.85rem;
    margin-bottom: 1.6rem;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 59.7rem;
    height: 100vh;
`;
