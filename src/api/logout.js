import client from './client';

export const SignoutApi = async () => {
    try {
        const res = await client.delete('/auth/signout', {
            data: { refreshToken: localStorage.getItem('refreshToken') }
        });

        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('memberId');

        client.defaults.headers.common['Authorization'] = null;
        console.log(res, "로그아웃 성공");
        return res;
    } catch (err) {
        console.log(err);
    }
};
