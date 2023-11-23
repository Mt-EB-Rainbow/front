import { useState } from 'react';
import Resume from '../components/resume/Resume';
import GoLogin from '../components/resume/GoLogin';

const ResumePage = () => {
    const [isLogin, setIsLogin] = useState(true);

    return <>{isLogin ? <Resume /> : <GoLogin />}</>;
};

export default ResumePage;
