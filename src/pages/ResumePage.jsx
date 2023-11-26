import Resume from '../components/resume/Resume';
import GoLogin from '../components/resume/GoLogin';
import { useRecoilValue } from 'recoil';
import { loginState } from '../recoil/loginState';
import { useState } from 'react';

const ResumePage = () => {
    // const isLoggedin = useRecoilValue(loginState);
    const token = localStorage.getItem('accessToken');
    const [isLoggedin, setIsLoggedin] = useState(token);

    return <>{isLoggedin ? <Resume /> : <GoLogin />}</>;
};

export default ResumePage;
