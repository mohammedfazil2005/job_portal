import axios from "axios"
import baseURL from "./baseURL"

export const axiosConnection=async(HTTPmethod,endpoint,responceData)=>{
    const requestConfigration={
        method:HTTPmethod,
        url:baseURL+endpoint,
        data:responceData
    }

    return await axios(requestConfigration).then((responce)=>{
       return responce;
    }).catch((error)=>{
        return error;
    })


}