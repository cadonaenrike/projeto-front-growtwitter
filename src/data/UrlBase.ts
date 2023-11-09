import axios from 'axios';

const API_BASE_URL = 'https://api-growtwitter.onrender.com';
export default API_BASE_URL;

// https://api-growtwitter.onrender.com       api do render
//http://localhost:3333                       servidor de teste localhosts 5173

export const API = axios.create({
  baseURL: API_BASE_URL,
  headers: { token: sessionStorage.getItem('token') }
});
