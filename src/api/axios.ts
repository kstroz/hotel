import axios from 'axios';
import { BASE_URL } from './api.consts';

const instance = axios.create({
  baseURL: BASE_URL,
});

export const {
  get: apiGet,
  post: apiPost,
  patch: apiPatch,
  put: apiPut,
  delete: apiDelete,
} = instance;

export default instance;
