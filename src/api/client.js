import axios from 'axios';

const client = axios.create();
client.defaults.baseURL = 'server.careersconnect.net';

client.defaults.withCredentials = true;

const token = localStorage.getItem('accessToken');
client.defaults.headers.common['Authorization'] = token
    ? `Bearer ${token}`
    : null;

export default client;
