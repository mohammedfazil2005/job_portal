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

export const fetchUserAddedJobs=async(id)=>{
    return await axiosConnection("get",`/users/${id}`,"")
}

export const userAddedJobs=async(id,jobDetails)=>{
    return await axiosConnection("put",`/users/${id}`,jobDetails)
}

export const allJobsAdded=async(jobDetails)=>{
    return await axiosConnection("post",'/jobs',jobDetails)
}

export const fetchAllJobs=async()=>{
    return await axiosConnection("get",'/jobs',"")
}

export const appliedJobUser=async(id,appliedJob)=>{
    return await axiosConnection("put",`/users/${id}`,appliedJob)
}

export const updateJobByID=async(id,details)=>{
    return await axiosConnection("put",`/jobs/${id}`,details)
}

export const fetchAllJobbByID=async(id)=>{
    return await axiosConnection("get",`/jobs/${id}`,"")
}

export const deleteJobById=async(id)=>{
    return await axiosConnection("delete",`/jobs/${id}`,{})
}