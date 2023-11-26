import client from './client';
// 이력서 작성 시작
export const ResumeApi = async memberId => {
    try {
        const res = await client.post('/resume', {
            memberId: Number(memberId),
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

        console.log(res, ' resume 목록 조회 성공');

        return res;
    } catch (err) {
        console.log(err);
    }
};

// 이력서 작성 내용 post
export const NewResumeApi = async (
    resumeId,
    title,
    introduction,
    educations,
    experiences,
    languages,
    awards,
) => {
    try {
        const res = await client.post(`/resume/${resumeId}`, {
            title: String(title),
            introduction: String(introduction),
            educations,
            experiences,
            languages,
            awards,
        });

        console.log(res, ' resume 내용 post 성공');
        return res;
    } catch (err) {
        console.log(err);
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
