import axios from "axios";

const request = axios.create({
  validateStatus: false,
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_URL,
});

export default request;
