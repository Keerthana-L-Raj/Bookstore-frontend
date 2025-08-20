import {commonAPI} from "./commonAPI"
import { serverURL } from "./serverURL"

//API CALL
//register
export const registerAPI = (reqBody)=>{
    return commonAPI ('POST',`${serverURL}/api/register`,reqBody,{})
}

//login
export const loginAPI =(reqBody)=>{
   return commonAPI('POST',`${serverURL}/api/login`,reqBody,{})
}

//google login
export const GoogleLoginAPI =(reqBody)=>{
    return commonAPI('POST',`${serverURL}/api/google-login`,reqBody,{})
}

//Uploadbook
export const uploadBookAPI = (reqBody,reqHeader)=>{
    return commonAPI('POST',`${serverURL}/api/addBook`,reqBody,reqHeader)
}

//homeBooks
export const getHomeBookAPI = ()=>{
    return commonAPI('GET',`${serverURL}/api/homeBooks`)
}

//allBooks
export const getAllBookAPI = (searchKey,reqHeader)=>{
    return commonAPI('GET',`${serverURL}/api/allBooks?search=${searchKey}`,"",reqHeader)
}

//get a book
export const getABookAPI = (id,reqHeader)=>{
    return commonAPI('GET',`${serverURL}/api/getABook/${id}`,"",reqHeader)
}
//-----------------ADMIN-------------------
export const getAdminAllBookAPI = (reqHeader)=>{
    return commonAPI('GET',`${serverURL}/api/admin-allBooks`,"",reqHeader)
}

export const adminApprovedBookAPI=(reqBody,reqHeader)=>{
    return commonAPI('PUT',`${serverURL}/api/admin-approvedBook`,reqBody,reqHeader)
}

export const getAdminAllUsersAPI=(reqHeader)=>{
    return commonAPI('GET',`${serverURL}/api/admin-allUsers`,"",reqHeader)
}


//-------------------------------Job-----------------------------------
export const uploadJobAPI = (reqBody, reqHeader) => {
    return commonAPI('POST',` ${serverURL}/api/admin-addJobs`, reqBody, reqHeader)
}

export const getAdminAllJobsAPI = (reqHeader)=>{
    return commonAPI('GET',`${serverURL}/api/admin-allJobs`,"",reqHeader)
}

export const deleteAdminAJobsAPI=(id,reqHeader)=>{
    return commonAPI('DELETE',`${serverURL}/api/admin-deleteJobs/${id}`,"",{})
}

export const UpdateAdminAPI =(reqBody,reqHeader)=>{
    return commonAPI('PUT',`${serverURL}/api/updateAdmin`,reqBody,reqHeader)
}

export const getAdminDetailsAPI=(reqHeader)=>{
    return commonAPI('GET',`${serverURL}/api/admin-Details`,"",reqHeader)
}

export const makePaymentAPI=(reqBody,reqHeader)=>{
    return commonAPI('PUT',`${serverURL}/api/make-payment`,reqBody,reqHeader)
}