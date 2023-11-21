import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/common.css';

import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import Layout from './components/_common/layout/Layout';
import Signup01Page from './pages/Signup01Page';
import Signup02Page from './components/signuppage/Signup02';
import LoginEmailPage from './pages/LoginEmailPage';
import Signup03Page from './pages/Signup03Page';
import UserInfoPage from './pages/UserInfoPage';
import MentorPoolPage from './pages/MentorPoolPage';
import MentorRegistPage from './pages/MentorRegistPage';
import SupportPage from './pages/SupportPage';
import TrainingPage from './pages/TrainingPage';

function App() {
    return (
        <>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        {/* 메인 페이지 */}
                        <Route exact path='/' element={<MainPage />} />
                        {/* 회원가입/로그인 페이지 */}
                        <Route exact path='/login' element={<LoginPage />} />
                        <Route
                            exact
                            path='/login/email'
                            element={<LoginEmailPage />}
                        />
                        <Route
                            exact
                            path='/signup01'
                            element={<Signup01Page />}
                        />

                        <Route
                            exact
                            path='/signup02'
                            element={<Signup02Page />}
                        />

                        <Route
                            exact
                            path='/signup03'
                            element={<Signup03Page />}
                        />
                        <Route
                            exact
                            path='/userInfo'
                            element={<UserInfoPage />}
                        />
                        <Route
                            exact
                            path='/mentor/pool'
                            element={<MentorPoolPage />}
                        />
                        <Route
                            exact
                            path='/mentor/regist'
                            element={<MentorRegistPage />}
                        />
                        {/* 직업 교육 페이지 */}
                        <Route
                            exact
                            path='/training'
                            element={<TrainingPage />}
                        />
                        {/* 취업 지원 기관 페이지 */}
                        <Route
                            exact
                            path='/support'
                            element={<SupportPage />}
                        />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </>
    );
}

export default App;
