import client from './client';

export const CheckMentorApi = async memberId => {
    try {
        const res = await client.get(`/auth/check/${memberId}`);

        console.log(res.data ? '멘토확인 완료' : ' 구직자 확인 완료');
        return res;
    } catch (err) {
        console.log(err);
    }
};
