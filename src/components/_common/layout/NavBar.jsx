import { Router, useNavigate } from 'react-router-dom';
import WhiteBtn from '../Btn/WhiteBtn';
import { NavBox, Menu } from './NavBar.style';

const NavBar = () => {
    const navigate = useNavigate();

    const goLogin = () => {
        navigate('/login');
    };
    const goHome = () => {
        navigate('/');
    };

    return (
        <div>
            <NavBox>
                <WhiteBtn text={'로고'} onClick={goHome} />
                <span>
                    <Menu>프로그램 소개</Menu>
                    <Menu>이력서</Menu>
                    <Menu>합격 이력서</Menu>
                    <Menu>멘토풀</Menu>
                    <Menu>Q&A 게시판</Menu>
                </span>
                <WhiteBtn text={'회원가입 / 로그인'} onClick={goLogin} />
            </NavBox>
        </div>
    );
};

export default NavBar;
