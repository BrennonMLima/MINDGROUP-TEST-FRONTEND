import axios, { AxiosRequestConfig } from "axios";
import { getCookie } from "typescript-cookie";

const api = axios.create({
    baseURL: "http://localhost:8000",
});

api.interceptors.request.use(
    (request) => {
        if (!isPublicEndpoint) api.defaults.headers.common["Authorization"] = getCookie("auth-token")

        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const isPublicEndpoint = (endpoint: string, method: string) => {
    return endpoint === "/login" || "/user" && method === "POST"
}

export default api