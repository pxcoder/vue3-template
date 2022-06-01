import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface IResponseData<T> {
  code: number;
  msg: string;
  data: T;
}

class Http {
  service: AxiosInstance;
  constructor() {
    this.service = axios.create({
      baseURL: '',
    });
    // 请求拦截器
    this.service.interceptors.request.use(
      (config: AxiosRequestConfig) => config,
      error => Promise.reject(error),
    );
    // 响应拦截器
    this.service.interceptors.response.use(
      response => response,
      error => Promise.reject(error),
    );
  }
  /**
   * 以下方法和 axios 提供的同名方法使用方法是一致的，只是对返回的数据进行了处理。
   */
  request<T = any>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.service.request(config);
  }
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<IResponseData<T>> {
    return this.service.get(url, config).then(res => res.data);
  }
  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<IResponseData<T>> {
    return this.service.delete(url, config).then(res => res.data);
  }
  head<T = any>(url: string, config?: AxiosRequestConfig): Promise<IResponseData<T>> {
    return this.service.head(url, config).then(res => res.data);
  }
  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<IResponseData<T>> {
    return this.service.post(url, data, config).then(res => res.data);
  }
  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<IResponseData<T>> {
    return this.service.put(url, data, config).then(res => res.data);
  }
  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<IResponseData<T>> {
    return this.service.patch(url, data, config).then(res => res.data);
  }
}

export const http = new Http();

export default http;
