import axios from 'axios';

export interface ConfigType {
  method: string;
  data: object;
  url: string;
}

const baseURL = 'https://api.hackertab.dev/';

const instance = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 30000,
});

const handleError = (error: any) => {
  return Promise.reject(error);
};

instance.interceptors.request.use(config => {
  const newConfig = { ...config, data: config.data };

  return newConfig;
}, handleError);

instance.interceptors.response.use(res => res, handleError);

export default instance;
