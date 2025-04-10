import axios, { AxiosResponse } from 'axios';

export interface IAxiosPost<T> {
  path: string
  data: T
}
const API_URL = import.meta.env.VITE_API_URL;

export const AxiosPost = <T, U = any>({ path, data }: IAxiosPost<T>): Promise<AxiosResponse<U>> => {
  return axios.post<U>(`${API_URL}${path}`, data);
}
export interface IAxiosPostAuth<T> {
  path: string
  data: T
  token: string
}

export const AxiosPostAuth = <T, U = any>({ path, data, token }: IAxiosPostAuth<T>): Promise<AxiosResponse<U>> => {
  return axios.post(`${API_URL}${path}`, data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

