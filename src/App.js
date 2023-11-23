import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/common.css';

import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import Layout from './components/_common/layout/Layout';
import Signup01Page from './pages/Signup01Page';
import Signup02Page from './components/signuppage/Signup02';
import LoginEmailPage from './pages/LoginEmailPage';
import Signup03Page from './pages/Signup03Page';

import SupportPage from './pages/SupportPage';
import TrainingPage from './pages/TrainingPage';
import ChildcarePage from './pages/ChildcarePage';
import ResumePage from './pages/ResumePage';
import ResumeNewPage from './pages/ResumeNewPage';
import MentorFeedbackPage from './pages/MentorFeedbackPage';
import MentorBoardsPage from './pages/MentorBoardsPage';
import ScrollToTop from './components/_common/ScrollToTop';

function App() {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
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

                        <Route
                            exact
                            path='/childcare'
                            element={<ChildcarePage />}
                        />
                        <Route exact path='/resume' element={<ResumePage />} />
                        <Route exact path='/new' element={<ResumeNewPage />} />
                        <Route
                            exact
                            path='/mentorfeedback'
                            element={<MentorFeedbackPage />}
                        />
                        <Route
                            exact
                            path='/mentorboards'
                            element={<MentorBoardsPage />}
                        />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </>
    );
}

export default App;
