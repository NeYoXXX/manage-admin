import { VAxios } from "./Axios";

function createAxios(){
    return new VAxios({
        
    })
}

export const defHttp = createAxios()