import axios from "axios";
axios.defaults.baseURL = 'http://localhost:5050/api';
let refreshToken = localStorage.getItem("refreshToken");
let user = JSON.parse(localStorage.getItem("user"));
//Request
axios.interceptors.request.use(
    config => {
        if (!config.headers.Authorization) {
            const token = localStorage.getItem("CC_Token");
            if (token) {
                console.log("Token --- : " + token);
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            }
        }
        return config;
    },
    error => Promise.reject(error)
);
// Response interceptor for API calls
axios.interceptors.response.use((response) => {
    return response
}, function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        if (refreshToken) {
            axios.post('http://localhost:5050/api/users/refreshToken/', user).then((response) => {
                console.log(response.data.accessToken)
                axios.defaults.headers.common['Authorization'] = 'Bearer ' +
                    response.data.accessToken;
                localStorage.setItem("CC_Token", response.data.accessToken);
                return axios(originalRequest);
            })
        }
    }
    return Promise.reject(error);
});
export default axios;
