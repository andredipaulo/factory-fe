import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost/api"
    // baseURL: "http://192.168.100.24/api"
})