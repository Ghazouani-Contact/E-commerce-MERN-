import axios from "axios";
const BASE_URL = "http://localhost:5000/api/";
//const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser['accesToken'] ?? "";

 

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
});


userRequest.interceptors.request.use(function (config) {
    let access_token = localStorage.getItem('access_token')
    if (access_token != null) {
        config.headers = {
            Authorization: `Bearer ${access_token}`
        }
    }
        
    return config;
}, (error) => {
    return Promise.reject(error);
});
