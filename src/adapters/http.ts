import { API_KEY, API_URL } from '@env';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: API_URL,
  validateStatus: status => status < 500,
});

instance.interceptors.request.use(config => {
  config.headers['x-api-key'] = API_KEY;
  return config;
});

interface HttpResponse<T = any> {
  ok: boolean;
  data: T;
  status: number;
  originalResponse: AxiosResponse<T>;
}

function mapResponse<T = any>(response: AxiosResponse<T>): HttpResponse<T> {
  return {
    ok: response.status < 300,
    data: response.data,
    status: response.status,
    originalResponse: response,
  };
}

export async function get<T = any>(
  url: string,
  options?: AxiosRequestConfig,
): Promise<HttpResponse<T>> {
  const response = await instance.get(url, options);
  return mapResponse<T>(response);
}
