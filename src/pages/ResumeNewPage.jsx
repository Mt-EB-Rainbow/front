import New from '../components/resume/New';
import { useParams } from 'react-router-dom';
import { getResumeContentApi } from '../api/resume';

const ResumeNewPage = () => {
    const { resumeId } = useParams();

    const getData = async () => {
        const res = await getResumeContentApi(resumeId);
        console.log(res);
    };
    getData();
    return (
        <>
            <New isEdit={false} />
        </>
    );
};

export default ResumeNewPage;
