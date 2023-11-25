import { useParams } from 'react-router-dom';
import { getResumeContentApi } from '../api/resume';
import New from '../components/resume/New';
import { useEffect } from 'react';

const ResumeDetailPage = () => {
    // api 값 data로 받아서 넣어주기
    // 피드백 있으면 true 값 전달해서 댓글 컴포넌트 띄우기
    const { resumeId } = useParams();

    const getData = async () => {
        const res = await getResumeContentApi(resumeId);
        console.log(res);
    };
    getData();

    return (
        <>
            <New isEdit={true} />
        </>
    );
};

export default ResumeDetailPage;
