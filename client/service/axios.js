import axios from 'axios';

const headers = new Headers()


 //headers.append("x-access-token","EyichemDotCom-secret-key")
 headers.append("Access-Control-Allow-Origin","*")

 const axiosInstance = axios.create({baseURL:`${process.env.baseUrl}/` ,headers:headers    })
 

export const get = async (path) => {
        return await axiosInstance.get(path) 
    }

    
export const post = async (payload) => {
        // return await axiosInstance.post('csv/ps/upload?file', payload.data)
         return await axiosInstance.post(payload.path, payload.data)
      // console.log(payload)
    } 

 export  const put = async(payload, data) => {
        if(data)
        return await axios.put(payload.path, payload.data)
        else
        return await axios.put(payload.path) 
    } 

export const destroy = async (payload) => {
        return await axios.delete(payload.path)
    } 
