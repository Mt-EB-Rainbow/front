import client from './client';

export const SupportApi = async (district, dong, pageNum) => {
    try {
        const res = await client.get('/sites', {
            district: String(district),
            dong: String(dong),
            pageNum: String(pageNum),
        });

        console.log(res, '조회 성공');

        return res;
    } catch (err) {
        console.log(err);
    }
};
