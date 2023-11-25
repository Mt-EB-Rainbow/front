import { useMemo, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TrainingApi } from '../../api/TrainingCourse';

const useTraining = () => {
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState(1);
    const TRAININGS_PER_PAGE = 12;

    const [training, setTraining] = useState([]);
    const [totalTrainings, setTotalTrainings] = useState(0);

    useEffect(() => {
        const fetchSites = async () => {
            const startPage = currentPage;

            try {
                const courses = await TrainingApi(
                    'KIAO7F5LGGBIAW16CBXXR76IQMEHIOWU',
                    'A',
                    startPage,
                    TRAININGS_PER_PAGE,
                );
                setTraining(courses.response.response_body.list.data);
                setTotalTrainings(courses.response.response_body.result); // 전체 트레이닝 수
            } catch (err) {
                console.log(err);
            }
        };
        fetchSites();
    }, [currentPage]);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const pageFromURL = Number(params.get('page') || '1');
        setCurrentPage(pageFromURL);
    }, [location.search]);

    const lastPage = Math.ceil(totalTrainings / TRAININGS_PER_PAGE);

    // const category = training.

    return {
        currentPage,
        lastPage,
        training,
        totalTrainings,
    };
};

export default useTraining;
