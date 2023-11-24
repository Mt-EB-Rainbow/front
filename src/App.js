import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/common.css';

import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import Layout from './components/_common/layout/Layout';
import Signup02Page from './pages/Signup02Page';
import LoginEmailPage from './pages/LoginEmailPage';
import Signup03Page from './pages/Signup03Page';
import Signup01Page from './pages/Signup01Page';
import ResumeDetailPage from './pages/ResumeDetailPage';

import SupportPage from './pages/SupportPage';
import TrainingPage from './pages/TrainingPage';
import ChildcarePage from './pages/ChildcarePage';
import ResumePage from './pages/ResumePage';
import ResumeNewPage from './pages/ResumeNewPage';
import MentorFeedbackPage from './pages/MentorFeedbackPage';
import MentorBoardsPage from './pages/MentorBoardsPage';
import ScrollToTop from './components/_common/ScrollToTop';

import RecommendPage from './pages/RecommendPage';
import RecommendResultPage from './pages/RecommendResultPage';
import DictionaryPage from './pages/DictionaryPage';
import MentorSignupPage from './pages/MentorSignupPage';
import MentorSignup03Page from './pages/MentirSignup03Page';
import SuccessPage from './pages/SuccessPage';
import { RecoilRoot } from 'recoil';

import RecommendPage from './pages/RecommendPage';
import DictionaryPage from './pages/DictionaryPage';
import SuccessPage from './pages/SuccessPage';

function App() {
    return (
        <>
            <BrowserRouter>
                <RecoilRoot>
                    <ScrollToTop />
                    <Layout>
                        <Routes>
                            {/* 메인 페이지 */}
                            <Route exact path='/' element={<MainPage />} />
                            {/* 회원가입/로그인 페이지 */}
                            <Route
                                exact
                                path='/login'
                                element={<LoginPage />}
                            />
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
                                path='/mentorsignup'
                                element={<MentorSignupPage />}
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
                            <Route
                                exact
                                path='/resume'
                                element={<ResumePage />}
                            />
                            <Route
                                exact
                                path='/new/:resumeId'
                                element={<ResumeNewPage />}
                            />
                            <Route
                                exact
                                path='/detail/:resumeId'
                                element={<ResumeDetailPage />}
                            />

                            <Route
                                exact
                                path='/mentorfeedback/:resumeId'
                                element={<MentorFeedbackPage />}
                            />
                            <Route
                                exact
                                path='/mentorboards'
                                element={<MentorBoardsPage />}
                            />
                            <Route
                                exact
                                path='/dictionary'
                                element={<DictionaryPage />}
                            />
                            <Route
                                exact
                                path='/recommend'
                                element={<RecommendPage />}
                            />
                            <Route
                                exact
                                path='/recommend/result'
                                element={<RecommendResultPage />}
                            />
                            <Route
                                exact
                                path='/success/:id'
                                element={<SuccessPage />}
                            />
                            <Route
                                exact
                                path='/mentorsignup03'
                                element={<MentorSignup03Page />}
                            />
                        </Routes>
                    </Layout>
                </RecoilRoot>
            </BrowserRouter>
        </>
    );
}

export default App;
