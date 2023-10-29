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
    const goMentorPool = () => {
        navigate('/mentor/pool');
    };

    return (
        <div>
            <NavBox>
                <WhiteBtn text={'로고'} onClick={goHome} marginSide={'1.1'} />
                <span>
                    <Menu>프로그램 소개</Menu>
                    <Menu>이력서</Menu>
                    <Menu>합격 이력서</Menu>
                    <Menu onClick={goMentorPool}>멘토풀</Menu>
                    <Menu>Q&A 게시판</Menu>
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
