import axios from 'axios';
import { parseCookies } from 'nookies';

const { 'mostqi-token': savedToken } = parseCookies()

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_MOST_API_URL}`,
  headers: {
    'Authorization': savedToken ? "" : `Bearer ${savedToken}`
  },
  maxRedirects: 3
});

export default api;