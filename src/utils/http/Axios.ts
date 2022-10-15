import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export class VAxios{

    private readonly options
    private axiosInstance: AxiosInstance

    constructor(options){
        this.options = options
        this.axiosInstance = axios.create(options)
        this.setupInterceptor()
    }

    setupInterceptor(){
        
    }

    get(config: AxiosRequestConfig){
        return this.request({...config, method:'GET'})
    }

    post(config: AxiosRequestConfig){
        return this.request({...config, method:'POST'})
    }

    request(config: AxiosRequestConfig){
        return new Promise((resolve,reject)=>{
            this.axiosInstance
                .request(config)
                .then(res=>{
                    resolve(res)
                })
                .catch(reason=>{
                    reject(reason)
                })
        })
        
    }
}
