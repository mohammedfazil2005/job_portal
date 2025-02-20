import { axiosConnection } from "./AxiosConnection"

export const userRegistration=async(userDetails)=>{
    return await axiosConnection("post","/users",userDetails)
}
export const userLogin=async()=>{
    return await axiosConnection("get",'/users',"")
}
export const userProfile=async(id)=>{
    return await axiosConnection("get",`/users/${id}`,"")
}
export const userProfileUpdate=async(id,updatedDetails)=>{
    return await axiosConnection("put",`/users/${id}`,updatedDetails)
}