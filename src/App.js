import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/common.css';

import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import Layout from './components/_common/layout/Layout';
import SignupPage from './pages/SignupPage';
import LoginEmailPage from './pages/LoginEmailPage';

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
                        <Route exact path='/signup' element={<SignupPage />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </>
    );
}

export default App;
