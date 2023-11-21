import { Router, useNavigate } from 'react-router-dom';
import WhiteBtn from '../Btn/WhiteBtn';
import { NavBox, Menu } from './NavBar.style';
import logo from '../../../assets/logo.svg';

const NavBar = () => {
    const navigate = useNavigate();

    const goLogin = () => {
        navigate('/login');
    };
    const goHome = () => {
        navigate('/');
    };
    const goChildcare = () => {
        navigate('/childcare');
    };
    const goResume = () => {
        navigate('/resume');
    };
    const goTraining = () => {
        navigate('/training');
    };
    const goSupport = () => {
        navigate('/support');
    };

    return (
        <div>
            <NavBox>
                <img
                    src={logo}
                    alt='로고'
                    onClick={goHome}
                    style={{
                        width: '100px',
                        marginLeft: '20px',
                        cursor: 'pointer',
                    }}
                />
                <span>
                    <Menu>직무 백과</Menu>
                    <Menu>직무 추천</Menu>
                    <Menu onClick={goTraining}>직업 교육</Menu>
                    <Menu onClick={goResume}>이력서 작성</Menu>
                    <Menu onClick={goChildcare}>보육시설 조회</Menu>
                    <Menu onClick={goSupport}>취업지원 기관 조회</Menu>
                </span>
                <WhiteBtn
                    text={'회원가입 / 로그인'}
                    onClick={goLogin}
                    marginSide={'1.1'}
                />
            </NavBox>
        </div>
    );
};

export default NavBar;
