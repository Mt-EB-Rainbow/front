// import client from './client';

// export const KakaoLogin = async code => {
//     try {
//         const response = await client.post('/member/auth', {
//             code: `${code}`,
//             redirectUri: `${process.env.REACT_APP_REDIRECT_URI}`,
//         });

//         const accessToken = response.data.accessToken;
//         const refreshToken = response.data.refreshToken;

//         localStorage.setItem('accessToken', accessToken);
//         localStorage.setItem('refreshToken', refreshToken);

//         return Promise.resolve(response);
//     } catch (error) {
//         return Promise.reject(error);
//     }
// };

// const KakaoLogin = () => {
//     const REST_API_KEY = '백엔드한테 달라하자1';
//     const REDIRECT_URI = '백엔드한테 달라하자2';
//     const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

//     const loginHandler = () => {
//         window.location.href = link;
//     };

//     return (
//         <button type='button' onClick={loginHandler}>
//             로그인 하기
//         </button>
//     );
// };
