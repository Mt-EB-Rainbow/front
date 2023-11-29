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

// 이력서 제목, 자기소개, 공개 여부, 선택 직무 put 요청
export const updateResumeBasicInfo = async (resumeId, data) => {
    console.log(`data: ${data}`);
    try {
        const res = await client.put(`/resume/${resumeId}`, data);
        return res;
    } catch (err) {
        console.error('이력서 업데이트 중 오류', err);
        throw err;
    }
};

// 학력, 경력, 어학, 수상경력 post 요청
export const postResumeSection = async (resumeId, section, data) => {
    console.log(section, data);
    try {
        const res = await client.post(`/resume/${resumeId}/${section}`, data);
        return res;
    } catch (err) {
        console.error(`이력서 ${section} 부분 포스팅 중 오류:`, err);
        throw err;
    }
};

// 학력, 경력, 어학, 수상경력 put 요청
export const updateResumeEducation = async (educationId, data) => {
    console.log('education', data);
    try {
        const res = await client.put(`/resume/education/${educationId}`, data);
        return res;
    } catch (err) {
        console.error(`학력 업데이트 중 오류: ${educationId}:`, err);
        throw err;
    }
};

export const updateResumeExperience = async (experiencesId, data) => {
    console.log('experience', data);
    try {
        const res = await client.put(
            `/resume/experience/${experiencesId}`,
            data,
        );
        return res;
    } catch (err) {
        console.error(`학력 업데이트 중 오류: ${experiencesId}:`, err);
        throw err;
    }
};

export const updateResumeLanguage = async (languagesId, data) => {
    console.log('language', data);
    try {
        const res = await client.put(`/resume/language/${languagesId}`, data);
        return res;
    } catch (err) {
        console.error(`학력 업데이트 중 오류: ${languagesId}:`, err);
        throw err;
    }
};

export const updateResumeAward = async (awardsId, data) => {
    console.log('award', data);
    try {
        const res = await client.put(`/resume/award/${awardsId}`, data);
        return res;
    } catch (err) {
        console.error(`학력 업데이트 중 오류: ${awardsId}:`, err);
        throw err;
    }
};
