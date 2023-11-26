import client from './client';

export const Signin = async (email, pw) => {
    try {
        const res = await client.post('/auth/signin', {
            email: String(email),
            pw: String(pw),
        });

        console.log(res);

        const token = res.data.accessToken;
        localStorage.setItem('accessToken', token);
        localStorage.setItem('memberId', res.data.memberId);

        return res;
    } catch (err) {
        console.log(err);
    }
};
