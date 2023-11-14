import axios from "axios";

export const api = axios.create({
    // baseURL: "http://localhost/api"
    baseURL: "http://dipaulo.ddns.net:8080/api"
})