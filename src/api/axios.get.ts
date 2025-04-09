import axios, { AxiosResponse } from 'axios';

export interface IAxiosGet {
  path: string
}
const API_URL = import.meta.env.VITE_API_URL;

export const AxiosGet = <U = any>({ path }: IAxiosGet): Promise<AxiosResponse<U>> => {
  return axios.get<U>(`${API_URL}${path}`);
}
export interface IAxiosGetAuth {
  path: string
  token: string
}

export const AxiosGetAuth = <U = any>({ path, token }: IAxiosGetAuth): Promise<AxiosResponse<U>> => {
  return axios.get(`${API_URL}${path}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}


