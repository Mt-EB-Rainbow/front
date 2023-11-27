import client from './client';

export const SignApi = async (name, email, pw, isMentor) => {
    try {
        const res = await client.post('/auth/signup', {
            name: String(name),
            email: String(email),
            pw: String(pw),
            isMentor,
        });

        console.log(res);

        return res;
    } catch (err) {
        console.log(err);
    }
};
