import axios from 'axios'

const service = axios.create({
    baseURL: "http://127.0.0.1:8089",
    timeout: 5000
})

export const baseURL = "http://127.0.0.1:8089"

export default service
