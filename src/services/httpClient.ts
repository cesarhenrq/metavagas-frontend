import axios from 'axios';

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export default httpClient;
