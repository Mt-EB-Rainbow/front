import client from '../../api/client';

export const SignApi = async (name, email, pw, nickname, birth) => {
    try {
        const res = await client.post('/auth/signup', {
            name,
            email,
            pw,
            nickname,
        });

        console.log(res);

        const token = res.data.accessToken;
        localStorage.setItem('efubtoken', token);
        return res;
    } catch (err) {
        console.log(err);
    }
};
