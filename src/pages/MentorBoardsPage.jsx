import { useState } from 'react';
import GoLoginMentor from '../components/mentorResume/GoLogin';
import MentorBoards from '../components/mentorResume/MentorBoards';

const MentorBoardsPage = () => {
    const token = localStorage.getItem('accessToken');
    const [isLoggedin, setIsLoggedin] = useState(token);

    return <>{isLoggedin ? <MentorBoards /> : <GoLoginMentor />}</>;
};

export default MentorBoardsPage;
