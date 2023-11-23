import client from './client';

export const SignApi = async (name, email, pw, nickname, birth) => {
    try {
        const res = await client.post('/auth/signup', {
            name: String(name),
            email: String(email),
            pw: String(pw),
            nickname: String(nickname),
            birth: String(birth),
        });

        console.log(res);

        const token = res.data.accessToken;
        localStorage.setItem('accessToken', token);
        return res;
    } catch (err) {
        console.log(err);
    }
};
