import axios from "axios";

const axiosInstance=axios.create({
    basicURL:'http://localhost:3000'
})
axiosInstance.interceptors.request.use((config)=>{
    const accessToken=localStorage.getItem("token")
    if (accessToken) {
        if (config) {
            config.headers.token=acce
            
        }
        
    }
})