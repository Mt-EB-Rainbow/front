import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/common.css';

import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* 메인 페이지 */}
                    <Route exact path='/' element={<MainPage />} />
                    {/* 회원가입/로그인 페이지 */}
                    <Route exact path='/login' element={<LoginPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
