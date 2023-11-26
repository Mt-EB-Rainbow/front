import client from './client';
// 질문, 선택지 리스트 조회
export const GetQuestion = async () => {
    try {
        const res = await client.get('/diagnosis/questions');
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

// 선택지 post - 결과 직업 리스트 반환
export const PostAnswer = async ans => {
    try {
        console.log(ans);
        const answerData = JSON.stringify(ans);
        const res = await client.post('/diagnosis', answerData, {
            headers: { 'Content-Type': 'application/json' },
        });
        return res.data;
    } catch (err) {
        console.log(err);
    }
};
