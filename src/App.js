import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/common.css';

import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import Layout from './components/_common/layout/Layout';
import LoginEmail from './components/mainpage/LoginEmail';

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
                            element={<LoginEmail />}
                        />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </>
    );
}

export default App;
