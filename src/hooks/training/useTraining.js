import { useMemo, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TrainingApi } from '../../api/TrainingCourse';

const useTraining = () => {
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState(1);
    const TRAININGS_PER_PAGE = 12;

    const [training, setTraining] = useState([]);
    const [totalTrainings, setTotalTrainings] = useState(0);
    const [loading, setLoading] = useState(true);

    console.log(true);

    const fetchSites = async () => {
        const startPage = currentPage;

        try {
            const courses = await TrainingApi(
                'KIAO7F5LGGBIAW16CBXXR76IQMEHIOWU',
                'A',
                startPage,
                TRAININGS_PER_PAGE,
            ).then(
                setLoading(false), // 데이터 로딩 완료
            );
            setTraining(courses.response.response_body.list.data);
            setTotalTrainings(courses.response.response_body.result); // 전체 트레이닝 수
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        //fetchSites();
    }, [currentPage]);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const pageFromURL = Number(params.get('page') || '1');
        setCurrentPage(pageFromURL);
    }, [location.search]);

    const lastPage = Math.ceil(totalTrainings / TRAININGS_PER_PAGE);

    return {
        currentPage,
        lastPage,
        training,
        setTraining,
        totalTrainings,
        setTotalTrainings,
        fetchSites,
        loading,
    };
};
