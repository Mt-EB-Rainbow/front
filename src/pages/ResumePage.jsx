import Resume from '../components/resume/Resume';
import GoLogin from '../components/resume/GoLogin';
import { useRecoilValue } from 'recoil';
import { loginState } from '../recoil/loginState';

const ResumePage = () => {
    const isLoggedin = useRecoilValue(loginState);

    return <>{isLoggedin ? <Resume /> : <GoLogin />}</>;
};

export default ResumePage;
