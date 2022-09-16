import axios, { AxiosRequestConfig } from 'axios';
import { IhttpClent, IhttpRequestParameters } from './IhttpClient';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

class HttpClient implements IhttpClent {
    get<T, U>(parameters : IhttpRequestParameters<T>):Promise<U>{
        return new Promise<U>((resolve, reject)=> {
            const {url, param} = parameters;
            const options: AxiosRequestConfig = {}
            if(param){
                options.params = param;
            }
            axios.get(url, options)
                .then((responce) => resolve(responce.data))
                .catch((err)=> reject(err))
        })
    }
}
export const http = new HttpClient()
