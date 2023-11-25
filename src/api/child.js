import client from './client';

export const GetChildApi = async (district, dong, pageNum) => {
    try {
        const res = await client.post('/nurtures', {
            district: String(district),
            dong: String(dong),
            pageNum: String(pageNum),
        });

        console.log(res, ' 보육시설 정보 조회 성공');

        return res;
    } catch (err) {
        console.log(err);

    }
};
