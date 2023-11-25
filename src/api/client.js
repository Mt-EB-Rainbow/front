import axios from 'axios';

const client = axios.create();
client.defaults.baseURL = 'https://server.careersconnect.net/';

client.defaults.withCredentials = true;

//accessToken 저장
const token = localStorage.getItem('accessToken');
client.defaults.headers.common['Authorization'] = token
    ? `Bearer ${token}`
    : null;

// client.interceptors.request.use(config => {
//     const token = localStorage.getItem('accessToken');
//     config.headers.Authorization = 'Bearer ' + token;

//     return config;
// });
export default client;

//refresh token api
export async function postRefreshToken() {
    const response = await client.post('/auth/refreshtoken', {
        refreshToken: localStorage.getItem('refreshToken'),
    });
    return response;
}

//토큰을 함께보내는 privateApi에 interceptor를 적용합니다
client.interceptors.response.use(
    // 200번대 응답이 올때 처리
    response => {
        return response;
    },
    // 200번대 응답이 아닐 경우 처리
    async error => {
        const {
            config,
            response: { status },
        } = error;

        //토큰이 만료되을 때
        if (status === 401) {
            if (error.response.data.message === 'Unauthorized') {
                const originRequest = config;
                //리프레시 토큰 api
                const response = await postRefreshToken();
                //리프레시 토큰 요청이 성공할 때
                if (response.status === 200) {
                    const newAccessToken = response.data.accessToken;
                    localStorage.setItem(
                        'accessToken',
                        response.data.accessToken,
                    );
                    localStorage.setItem(
                        'refreshToken',
                        response.data.refreshToken,
                    );
                    client.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
                    //진행중이던 요청 이어서하기
                    originRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                    return client(originRequest);
                    //리프레시 토큰 요청이 실패할때(리프레시 토큰도 만료되었을때 = 재로그인 안내)
                } else if (response.status === 404 || response.status === 401) {
                    alert('다시 로그인해주세요.');
                    window.location.replace('/signin');
                }
            }
        }
        return Promise.reject(error);
    },
);
