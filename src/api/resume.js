import client from './client';
import { convertDateFieldsInArray } from '../util/DateFormatter';
import { resumedata } from '../components/resume/mockData';

// 이력서 작성 시작
export const ResumeApi = async memberId => {
    try {
        console.log(memberId);
        const res = await client.post('/resume', {
            memberId: memberId,
        });

        console.log(res);
        return res;
    } catch (err) {
        console.log(err);
    }
};

// 이력서 목록 보기(사용자별)
export const GetResumeApi = async memberId => {
    try {
        const res = await client.get(`/resume/member/${memberId}`);

        return res;
    } catch (err) {
        console.log(err);
    }
};

// 이력서 작성 내용 post
export const NewResumeApi = async (resumeId, resumeData) => {
    // 날짜 필드 변환
    const convertedEducations = convertDateFieldsInArray(
        resumeData.educations,
        ['startDate', 'finishDate'],
    );
    const convertedExperiences = convertDateFieldsInArray(
        resumeData.experiences,
        ['startDate', 'finishDate'],
    );
    const convertedLanguages = convertDateFieldsInArray(resumeData.languages, [
        'gainedDate',
    ]);
    const convertedAwards = convertDateFieldsInArray(resumeData.awards, [
        'startDate',
        'finishDate',
    ]);

    // 변환된 데이터로 새 객체 생성
    const convertedData = {
        ...resumeData,
        educations: convertedEducations,
        experiences: convertedExperiences,
        languages: convertedLanguages,
        awards: convertedAwards,
    };

    try {
        const res = await client.post(`/resume/${resumeId}`, convertedData);
        console.log('API Response:', res); // 응답 로그
        return res;
    } catch (err) {
        console.error('API Error:', err); // 오류 로그
        throw err; // 오류를 다시 throw하여 상위 호출자에게 전파
    }
};

// 이력서 작성 내용 get
export const getResumeContentApi = async resumeId => {
    try {
        const res = await client.get(`/resume/${Number(resumeId)}`);

        console.log(res, ' resume 내용 조회 성공');

        return res;
    } catch (err) {
        console.log(err);
    }
};

//이력서 전체 조회하기
export const getAllResume = async () => {
    try {
        const res = await client.get(`/resume`);

        console.log(res, 'resume 전체 목록 조회 성공');

        return res;
    } catch (err) {
        console.log(err);
    }
};
