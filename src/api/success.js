import client from './client';

// 성공 사례 전체 리스트 조회
export const GetAllSuccess = async () => {
    try {
        const res = await client.get('/examples');
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

// 성공 사례 개별 조회
export const GetSuccessByID = async successId => {
    try {
        const res = await client.get(`/examples/${successId}`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};
