import { useMemo, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TrainingData } from '../../mock/Training';

const PROJECTS_PER_PAGE = 12;

const useTraining = () => {
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState(1); // currentPage 상태 추가

    // 프로젝트 목록 불러오기
    const projects = TrainingData;

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const pageFromURL = Number(params.get('page') || '1');
        if (currentPage !== pageFromURL) {
            setCurrentPage(pageFromURL);
        }
    }, [location.search, currentPage]);

    // 현재 페이지에 보여줄 프로젝트
    const projectsPerPage = useMemo(() => {
        if (!projects) return [];
        const start = (currentPage - 1) * PROJECTS_PER_PAGE;
        const end = start + PROJECTS_PER_PAGE;
        return projects.slice(start, end);
    }, [projects, currentPage]);

    // 마지막 페이지
    const lastPage = useMemo(() => {
        if (!projects) return 1;
        return Math.ceil(projects.length / PROJECTS_PER_PAGE);
    }, [projects]);

    return {
        currentPage,
        lastPage,
        projects,
        projectsPerPage,
    };
};

export default useTraining;
