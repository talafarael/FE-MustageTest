import { useTokenStore } from '@/store/authTokenStore';
import axios from 'axios';

export interface IAxiosPost<T> {
  path: string
  data: T
}
export const AxiosPost = <T>({ path, data }: IAxiosPost<T>) => {
  axios.post(`${process.env.API_PORT}${path}`, data)
}
export interface IAxiosPost<T> {
  path: string
  data: T
}
export const AxiosPostAuth = <T>({ path, data }: IAxiosPost<T>) => {
  const { token } = useTokenStore()
  axios.post(`${process.env.API_PORT}${path}`, data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

