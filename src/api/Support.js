import client from './client';

// 취업 지원 사이트 전체 조회
export const SupportApi = async () => {
    try {
        const res = await client.get('/sites');
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

// 취업 지원 사이트 타입별 조회
export const SupportByTypeApi = async siteType => {
    try {
        const res = await client.get(`/sites/${siteType}`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};
