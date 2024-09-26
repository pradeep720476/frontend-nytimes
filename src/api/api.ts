import axios from "axios";
const baseURL = "https://api.nytimes.com/svc/mostpopular/v2/viewed/";
const api_key = "MurhwvCa6FJqjp4kvG4Ta3c8Nuy6BWKt";
const api = axios.create({
  baseURL,
});

api.interceptors.request.use(
  (config) => {
    const finalurl = `${baseURL}${config.url}`;
    const key = `api-key=${api_key}`;
    config.url += (finalurl?.includes("?") ? "&" : "?") + key;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
