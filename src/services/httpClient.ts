import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://metavagasapi.onrender.com/',
});

export default httpClient;
