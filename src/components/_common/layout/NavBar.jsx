import { Router, useNavigate } from 'react-router-dom';
import WhiteBtn from '../Btn/WhiteBtn';
import { NavBox, Menu } from './NavBar.style';
import logo from '../../../assets/logo.svg';
import { SignoutApi } from '../../../api/logout';

const NavBar = () => {
    const navigate = useNavigate();
    const isMentor = false;
    const isLoggedin = localStorage.getItem('accessToken');

    // 로그아웃
    const logout = async () => {
        try {
            const res = await SignoutApi();
            if ((res.status == 200) | (res.status == 201)) {
                console.log(res);
                navigate('/')
            }
        } catch (err) {
            console.log(err);
            alert('오류')

        }

    }

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

    const goMentorBoards = () => {
        navigate('/mentorboards');
    };

    const goDictionary = () => {
        navigate('/dictionary');
    };

    const goRecommend = () => {
        navigate('/recommend');
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
                    <Menu onClick={goDictionary}>직무 백과</Menu>
                    <Menu onClick={goRecommend}>직무 추천</Menu>
                    <Menu onClick={goTraining}>직업 교육</Menu>
                    <Menu onClick={isMentor ? goMentorBoards : goResume}>
                        {isMentor ? '이력서 피드백' : '이력서 작성'}
                    </Menu>
                    <Menu onClick={goChildcare}>보육시설 조회</Menu>
                    <Menu onClick={goSupport}>취업지원 기관 조회</Menu>
                </span>
                {isLoggedin ? (
                    <>
                        <WhiteBtn
                            text={'로그아웃'}
                            marginSide={'1.1'}
                            font={'0.8'}
                            onClick={logout}
                        />
                    </>
                ) : (
                    <>
                        <WhiteBtn
                            text={'회원가입 / 로그인'}
                            onClick={goLogin}
                            marginSide={'1.1'}
                            font={'0.8'}
                        />
                    </>
                )}
            </NavBox>
        </div>
    );
};

export default NavBar;
