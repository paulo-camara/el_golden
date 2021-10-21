import axios from 'axios';

const host_api = 'http://localhost:8080';
export const api = axios.create({ baseURL: host_api });
