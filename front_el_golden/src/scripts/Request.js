import axios from 'axios';

const host_api = 'http://localhost:8080';

export const METHOD_POST = 'post';
export const METHOD_GET = 'get';
export const METHOD_DELETE = 'delete';

export const api = axios.create({ baseURL: host_api });
