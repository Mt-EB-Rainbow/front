import client from './client';

export const FeedbackApi = async (memberId, resumeId, content) => {
    try {
        const res = await client.post('/feedback', {
            memberId: Number(memberId),
            resumeId: Number(resumeId),
            content: String(content),
        });

        console.log(res);
        return res;
    } catch (err) {
        console.log(err);
    }
};

export const getFeedbackApi = async resumeId => {
    try {
        const res = await client.get(`/feedback/${resumeId}`);

        console.log(res, '피드백 조회 완료');
        return res;
    } catch (err) {
        console.log(err);
    }
};
