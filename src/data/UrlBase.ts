import axios from 'axios';

const API_BASE_URL = 'http://localhost:3333 ';
export default API_BASE_URL;

// https://api-growtwitter.onrender.com       api no ar
//http://localhost:3333                       servidor de teste local

export const API = axios.create({
  baseURL: API_BASE_URL,
  headers: { token: sessionStorage.getItem('token') }
});
