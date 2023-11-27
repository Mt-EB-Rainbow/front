import client from './client';

export const CheckMentorApi = async memberId => {
    try {
        const res = await client.get(`/auth/check/${memberId}`);

        console.log(res, '멘토 확인 완료');
        return res;
    } catch (err) {
        console.log(err);
    }
};
