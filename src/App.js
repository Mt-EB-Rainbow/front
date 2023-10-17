import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/common.css';

import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import NavBar from './components/_common/NavBar';
import Footer from './components/_common/Footer';

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    {/* 메인 페이지 */}
                    <Route exact path='/' element={<MainPage />} />
                    {/* 회원가입/로그인 페이지 */}
                    <Route exact path='/login' element={<LoginPage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
