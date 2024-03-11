import axios from "axios"

export const axiosInstance = axios.create({
    baseURL:process.env.ACT_APP_API_URL
})
