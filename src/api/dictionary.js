import client from './client';

// 직업 카테고리/세부 직업명 조회
export const GetCategories = async () => {
    try {
        const res = await client.get('/dictionary/categories');
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

// 직무 백과 정보 조회
export const GetJobInfo = async jobId => {
    try {
        const res = await client.get(`/dictionary/${jobId}`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

// 직무 백과 이름으로 검색한 결과 리스트 조화
export const GetJobInfoList = async name => {
    try {
        const res = await client.get(`/dictionary/search/${name}`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};
