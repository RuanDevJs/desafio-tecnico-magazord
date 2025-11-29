import axios from "axios";

const API = axios;
API.defaults.baseURL = process.env.NEXT_PUBLIC_API

export default API;
