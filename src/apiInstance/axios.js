import axios from "axios"

const API = axios.create({
    baseURL: "https://api.onetimex.in/api/v1",
    withCredentials: true
})

export default API