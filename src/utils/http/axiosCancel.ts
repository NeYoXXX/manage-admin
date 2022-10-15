import axios, { AxiosRequestConfig, Canceler, CancelToken } from "axios";


const pendingMap = new Map<String,Canceler>()

export const getPendingUrl = (config: AxiosRequestConfig)=>[config.method, config.url].join('&')


export class AxiosCancel{
    
    addPending(config: AxiosRequestConfig){
        this.removePending(config)
        const url = getPendingUrl(config)
        config.cancelToken = config.cancelToken || 
        new axios.CancelToken(cancel=>{
            pendingMap.set(url,cancel)
        })
    }

    removeAllPending(): void{
        pendingMap.forEach(cancel=>{
            cancel && cancel()
        })
        pendingMap.clear()
    }

    removePending(config: AxiosRequestConfig): void{
        const url = getPendingUrl(config)
        if(pendingMap.has(url)){
            const cancel = pendingMap.get(url)
            cancel && cancel()
            pendingMap.delete(url)
        }
    }
}